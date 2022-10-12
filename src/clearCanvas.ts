import { config as c, board as b } from "./config";

export function clearCanvas() {
  b.ctx.fillStyle = c.board_background;
  b.ctx.strokeStyle = c.board_border;
  b.ctx.fillRect(0, 0, b.canvas.width, b.canvas.height);
  b.ctx.strokeRect(0, 0, b.canvas.width, b.canvas.height);
}
