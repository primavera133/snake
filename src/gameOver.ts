import { config } from "./config";

export function gameOver() {
  if (!config.snakeboard_ctx) return;

  config.snakeboard_ctx.font = "30px Arial";
  config.snakeboard_ctx.fillStyle = "red";
  config.snakeboard_ctx.fillText("Game Over", 130, 180);
}
