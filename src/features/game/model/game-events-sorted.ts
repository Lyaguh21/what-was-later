import type { EventDifficulty } from "@/entities/settings";

export function parseYear(date: string): number {
  // Берём всё до первого дефиса месяца, но учитываем, что у отрицательного года есть ведущий "-"
  // Примеры:
  // "1066-10-14" -> "1066"
  // "-0444-03-01" -> "-0444"
  // "-400-01-01" -> "-400"
  const m = date.match(/^-?\d+/);
  return m ? Number(m[0]) : NaN;
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
