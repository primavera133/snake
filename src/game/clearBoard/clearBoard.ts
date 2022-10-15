export const clearBoard = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  boardBackground: string,
  boardBorder: string
) => {
  ctx.fillStyle = boardBackground;
  ctx.strokeStyle = boardBorder;
  ctx.fillRect(0, 0, width, height);
  ctx.strokeRect(0, 0, width, height);
};
