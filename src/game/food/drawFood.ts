export function drawFood(
  ctx: CanvasRenderingContext2D,
  foodX: number | null,
  foodY: number | null
) {
  if (!foodX || !foodY) {
    return;
  }
  ctx.fillStyle = "lightgreen";
  ctx.strokeStyle = "darkgreen";
  ctx.fillRect(foodX, foodY, 10, 10);
  ctx.strokeRect(foodX, foodY, 10, 10);
}
