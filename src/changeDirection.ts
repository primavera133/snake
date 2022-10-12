import { config as c } from "./config";
import { state as s } from "./state";

export enum direction {
  goingDown,
  goingUp,
  goingLeft,
  goingRight,
}

export function getDirection(): direction {
  if (c.dy === -10) return direction.goingUp;
  if (c.dy === 10) return direction.goingDown;
  if (c.dx === 10) return direction.goingRight;
  else return direction.goingLeft;
}

export function changeDirection(event: KeyboardEvent) {
  if (s.isChangingDirection) return;
  s.isChangingDirection = true; // only one change per cycle

  const LEFT_KEY = "ArrowLeft";
  const RIGHT_KEY = "ArrowRight";
  const UP_KEY = "ArrowUp";
  const DOWN_KEY = "ArrowDown";

  const keyPressed = event.key;

  const currentDirection = getDirection();

  if (keyPressed === LEFT_KEY && currentDirection != direction.goingRight) {
    c.dx = -10;
    c.dy = 0;
  }

  if (keyPressed === UP_KEY && currentDirection != direction.goingDown) {
    c.dx = 0;
    c.dy = -10;
  }

  if (keyPressed === RIGHT_KEY && currentDirection != direction.goingLeft) {
    c.dx = 10;
    c.dy = 0;
  }

  if (keyPressed === DOWN_KEY && currentDirection != direction.goingUp) {
    c.dx = 0;
    c.dy = 10;
  }
}
