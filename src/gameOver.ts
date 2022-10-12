import { board as b } from "./config";

export function gameOver() {
  if (!b.ctx) return;

  b.ctx.font = "30px Arial";
  b.ctx.fillStyle = "red";
  b.ctx.fillText("Game Over", 130, 180);
}
