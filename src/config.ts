type GameConfig = {
  dx: number;
  dy: number;
  board_border: string;
  board_background: string;
};

export const config: GameConfig = {
  dx: 10,
  dy: 0,
  board_border: "black",
  board_background: "white",
};

type Board = {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  scoreBoard: HTMLDivElement;
};

export let board: Board;

export function updateBoard(b: Board) {
  board = b;
}
