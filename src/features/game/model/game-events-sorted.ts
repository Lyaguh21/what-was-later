import type { EventDifficulty } from "@/entities/settings";

export function parseYear(date: string): number {
  // Берём всё до первого дефиса месяца, учитываем BCE (отрицательные года).
  // В данных BCE представлены со знаком минус, например "-0044" для 44 до н.э.
  // Исторические вычисления должны учитывать отсутствие года 0:
  // 44 до н.э. -> модельно: -43 (т.е. Number(-44) + 1).
  const m = date.match(/^-?\d+/);
  if (!m) return NaN;
  let y = Number(m[0]);
  if (y < 0) y = y + 1; // переводим в непрерывную шкалу с годом 0 = 1 до н.э.
  return y;
}

const DIFF_RANK: Record<EventDifficulty, number> = {
  easy: 0,
  medium: 1,
  hard: 2,
  insane: 3,
};

export function isAllowedEventDifficulty(
  eventDiff: EventDifficulty | undefined,
  selected: EventDifficulty,
) {
  const e = DIFF_RANK[eventDiff ?? "easy"];
  const s = DIFF_RANK[selected];
  return e <= s;
}
