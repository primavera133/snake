import { config } from "./config";

export function clearCanvas() {
  if (!config.snakeboard_ctx || !config.snakeboard) {
    return;
  }

  config.snakeboard_ctx.fillStyle = config.board_background;
  config.snakeboard_ctx.strokeStyle = config.board_border;
  config.snakeboard_ctx.fillRect(
    0,
    0,
    config.snakeboard.width,
    config.snakeboard.height
  );
  config.snakeboard_ctx.strokeRect(
    0,
    0,
    config.snakeboard.width,
    config.snakeboard.height
  );
}
