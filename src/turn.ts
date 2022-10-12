import { changeDirection, direction, getDirection } from "./changeDirection";

export function turnLeft() {
  const currentDirection = getDirection();

  switch (currentDirection) {
    case direction.goingUp:
      changeDirection(new KeyboardEvent("keyDown", { key: "ArrowLeft" }));
    case direction.goingDown:
      changeDirection(new KeyboardEvent("keyDown", { key: "ArrowRight" }));
    case direction.goingRight:
      changeDirection(new KeyboardEvent("keyDown", { key: "ArrowUp" }));
    case direction.goingLeft:
      changeDirection(new KeyboardEvent("keyDown", { key: "ArrowDown" }));
  }
}

export function turnRight() {
  const currentDirection = getDirection();

  switch (currentDirection) {
    case direction.goingUp:
      changeDirection(new KeyboardEvent("keyDown", { key: "ArrowRight" }));
    case direction.goingDown:
      changeDirection(new KeyboardEvent("keyDown", { key: "ArrowLeft" }));
    case direction.goingRight:
      changeDirection(new KeyboardEvent("keyDown", { key: "ArrowDown" }));
    case direction.goingLeft:
      changeDirection(new KeyboardEvent("keyDown", { key: "ArrowUp" }));
  }
}
