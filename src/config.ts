type GameConfig = {
  dx: number;
  dy: number;
  board_border: string;
  board_background: string;
  snakeboard: null | HTMLCanvasElement;
  snakeboard_ctx: null | CanvasRenderingContext2D;
  scoreBoard: null | HTMLDivElement;
};

export const config: GameConfig = {
  dx: 10,
  dy: 0,

  board_border: "black",
  board_background: "white",
  snakeboard: null,
  snakeboard_ctx: null,
  scoreBoard: null,
};
