import { board as b } from "./config";
import { state as s } from "./state";

export function drawFood() {
  if (!s.foodX || !s.foodY) {
    return;
  }
  b.ctx.fillStyle = "lightgreen";
  b.ctx.strokeStyle = "darkgreen";
  b.ctx.fillRect(s.foodX, s.foodY, 10, 10);
  b.ctx.strokeRect(s.foodX, s.foodY, 10, 10);
}
