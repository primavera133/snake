export type SnakePart = {
  x: number;
  y: number;
};

export type GameState = {
  snake: SnakePart[];
  changingDirection: boolean;
  foodX: number | null;
  foodY: number | null;
  score: number;
};

export const state: GameState = {
  snake: [],
  changingDirection: false,
  foodX: null,
  foodY: null,
  score: 0,
};
