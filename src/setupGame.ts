import { changeDirection } from "./changeDirection";
import { config as c } from "./config";
import { generateFood } from "./generateFood";
import { state as s } from "./state";
import { updateScore } from "./updateScore";

export const setupGame = (
  gameCanvas: HTMLCanvasElement,
  scoreBoard: HTMLDivElement
) => {
  if (!gameCanvas) {
    return;
  }

  s.snake = [
    { x: 200, y: 200 },
    { x: 190, y: 200 },
    { x: 180, y: 200 },
    { x: 170, y: 200 },
    { x: 160, y: 200 },
  ];
  s.changingDirection = false;

  c.dx = 10;
  c.dy = 0;

  c.scoreBoard = scoreBoard;
  c.board_border = "black";
  c.board_background = "white";
  c.snakeboard = gameCanvas;
  c.snakeboard_ctx = c.snakeboard.getContext("2d");

  updateScore();
  generateFood();

  document.addEventListener("keydown", changeDirection);
};
