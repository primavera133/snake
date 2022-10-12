import { changeDirection } from "./changeDirection";
import { updateBoard } from "./config";
import { generateFood } from "./generateFood";
import { state as s } from "./state";
import { updateScore } from "./updateScore";

export const setupGame = (
  canvas: HTMLCanvasElement,
  scoreBoard: HTMLDivElement
) => {
  if (!canvas) {
    return;
  }
  if (!scoreBoard) {
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  updateBoard({
    canvas,
    ctx,
    scoreBoard,
  });

  s.snake = [
    { x: 200, y: 200 },
    { x: 190, y: 200 },
    { x: 180, y: 200 },
    { x: 170, y: 200 },
    { x: 160, y: 200 },
  ];
  s.changingDirection = false;

  updateScore();
  generateFood();

  document.addEventListener("keydown", changeDirection);
};
