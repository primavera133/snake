import { config as c } from "./config";
import { state as s } from "./state";

export function changeDirection(event: KeyboardEvent) {
  if (s.isChangingDirection) return;
  s.isChangingDirection = true; // only one change per cycle

  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;

  const keyPressed = event.keyCode;
  const goingUp = c.dy === -10;
  const goingDown = c.dy === 10;
  const goingRight = c.dx === 10;
  const goingLeft = c.dx === -10;

  if (keyPressed === LEFT_KEY && !goingRight) {
    c.dx = -10;
    c.dy = 0;
  }

  if (keyPressed === UP_KEY && !goingDown) {
    c.dx = 0;
    c.dy = -10;
  }

  if (keyPressed === RIGHT_KEY && !goingLeft) {
    c.dx = 10;
    c.dy = 0;
  }

  if (keyPressed === DOWN_KEY && !goingUp) {
    c.dx = 0;
    c.dy = 10;
  }
}
