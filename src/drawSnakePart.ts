import { board as b } from "./config";
import { SnakePart } from "./state";

export function drawSnakePart(snakePart: SnakePart) {
  if (!b.ctx) {
    return;
  }

  b.ctx.fillStyle = "orchid";
  b.ctx.strokeStyle = "brown";
  b.ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  b.ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
