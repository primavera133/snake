import { turnLeft, turnRight } from "../turn";

export function askDriver() {
  const randomDirection = Math.floor(Math.random() * 10);

  switch (randomDirection) {
    case 0:
      turnLeft();
    case 1:
      turnRight();
  }
}
