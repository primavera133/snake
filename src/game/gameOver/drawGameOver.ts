export const drawGameOver = (ctx: CanvasRenderingContext2D) => {
  ctx.font = "30px Arial";
  ctx.fillStyle = "red";
  ctx.fillText("Game Over", 130, 180);
};
