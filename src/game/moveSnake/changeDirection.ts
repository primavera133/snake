import { Direction, DirectionInput } from "../../types";

export const changeDirection = (
  directionInput: DirectionInput,
  currentDirection: Direction
): Direction | void => {
  // if (s.isChangingDirection) return;
  //   s.isChangingDirection = true; // only one change per cycle

  const goingUp = currentDirection.dy === -10;
  const goingDown = currentDirection.dy === 10;
  const goingRight = currentDirection.dx === 10;
  const goingLeft = currentDirection.dx === -10;

  if (directionInput === DirectionInput.left && !goingRight) {
    return {
      dx: -10,
      dy: 0,
    };
  }

  if (directionInput === DirectionInput.up && !goingDown) {
    return {
      dx: 0,
      dy: -10,
    };
  }

  if (directionInput === DirectionInput.right && !goingLeft) {
    return {
      dx: 10,
      dy: 0,
    };
  }

  if (directionInput === DirectionInput.down && !goingUp) {
    return {
      dx: 0,
      dy: 10,
    };
  }
};
