import { config as c } from "./config";
import { state as s } from "./state";

export function drawFood() {
  if (!c.snakeboard_ctx || !s.foodX || !s.foodY) {
    return;
  }
  c.snakeboard_ctx.fillStyle = "lightgreen";
  c.snakeboard_ctx.strokeStyle = "darkgreen";
  c.snakeboard_ctx.fillRect(s.foodX, s.foodY, 10, 10);
  c.snakeboard_ctx.strokeRect(s.foodX, s.foodY, 10, 10);
}
