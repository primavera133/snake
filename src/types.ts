export type SnakePart = {
  x: number;
  y: number;
};

export type snakePartDrawConfig = {
  fillStyle: string;
  strokeStyle: string;
  x: number;
  y: number;
  widht: number;
  heigh: number;
};

export type GameState = {
  gameOver: boolean;
};

export type BoardConfig = {
  width: number;
  height: number;
  boardBackground: string;
  boardBorder: string;
};

export type State = {
  snake: SnakePart[];
  dx: number;
  dy: number;
  foodX: number | null;
  foodY: number | null;
};

export enum DirectionInput {
  up = "UP",
  down = "DOWN",
  left = "LEFT",
  right = "RIGHT",
}

export type Direction = {
  dx: number;
  dy: number;
};
