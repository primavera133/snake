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

export type BoardState = {
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
