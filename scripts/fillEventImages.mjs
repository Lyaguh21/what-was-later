import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь к файлу, где лежит массив
const INPUT_TS_PATH = path.resolve(
  __dirname,
  "../src/entities/game/model/allHistoryEventsList.tsx",
);
const OUTPUT_TS_PATH = path.resolve(
  __dirname,
  "../src/entities/game/model/allHistoryEvents.tsx",
);

/**
 * Вытаскивает title из ссылки вида:
 * https://ru.wikipedia.org/wiki/Пирамида_Хеопса
 */
function extractWikiTitle(url) {
  const u = new URL(url);
  const parts = u.pathname.split("/wiki/");
  if (parts.length < 2) return null;
  // title может быть с %XX
  return decodeURIComponent(parts[1]);
}

async function fetchWikiImageUrl(lang, title) {
  const api = `https://${lang}.wikipedia.org/w/api.php`;
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    prop: "pageimages",
    titles: title,
    pithumbsize: "1600",
    pilicense: "any",
    origin: "*",
  });

  const res = await fetch(`${api}?${params.toString()}`);
  if (!res.ok) return null;

  const data = await res.json();
  const pages = data?.query?.pages;
  if (!pages) return null;

  const page = Object.values(pages)[0];
  // thumbnail.source — обычно это upload.wikimedia.org/... и грузится стабильно
  return page?.thumbnail?.source ?? null;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function extractArrayLiteral(tsText) {
  const start = tsText.indexOf("[");
  const end = tsText.lastIndexOf("]");
  if (start === -1 || end === -1 || end <= start)
    throw new Error("Не нашел массив в файле.");
  return tsText.slice(start, end + 1);
}

async function main() {
  const tsText = await fs.readFile(INPUT_TS_PATH, "utf8");
  const arrLiteral = extractArrayLiteral(tsText);

  const events = Function(`"use strict"; return (${arrLiteral});`)();

  for (let i = 0; i < events.length; i++) {
    const ev = events[i];
    if (ev.imageUrl && ev.imageUrl.trim()) continue;

    const title = extractWikiTitle(ev.linkOnWiki);
    if (!title) {
      console.warn(`Не смог извлечь title из linkOnWiki у id=${ev.id}`);
      continue;
    }

    const lang = new URL(ev.linkOnWiki).hostname.split(".")[0] || "ru";

    const img = await fetchWikiImageUrl(lang, title);
    if (img) {
      ev.imageUrl = img;
      console.log(`OK id=${ev.id}: ${img}`);
    } else {
      console.warn(`NO IMAGE id=${ev.id}: ${ev.linkOnWiki}`);
    }

    await sleep(150);
  }

  const out = `import type { IGameEvent } from "./type";

export const allHistoryEvents: IGameEvent[] = ${JSON.stringify(events, null, 2)};
`;

  await fs.writeFile(OUTPUT_TS_PATH, out, "utf8");
  console.log(`\nГотово: ${OUTPUT_TS_PATH}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
