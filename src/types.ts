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

export type SnakeState = {
  snake: SnakePart[];
  dx: number;
  dy: number;
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
