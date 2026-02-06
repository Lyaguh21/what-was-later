export interface IDifficultyInfoModal {
  icon: string;
  key: string;

  difficultyName: string;
  description: string;

  difficultyEventTitle: string;
  recommendationTitle: string;

  firstCoupleEvents: string;
  secondCoupleEvents: string;

  color: string;

  windowStart: number;
  windowEnd: number;
  scoreAdd: number;
}
