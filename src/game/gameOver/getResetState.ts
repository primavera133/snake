import { randomizer } from "../../helpers";
import { State } from "../../types";

export const getResetState = (
  boardwidth: number,
  boardHeight: number
): State => {
  return {
    snake: [
      { x: 200, y: 200 },
      { x: 190, y: 200 },
      { x: 180, y: 200 },
      { x: 170, y: 200 },
      { x: 160, y: 200 },
    ],
    dx: 10,
    dy: 0,
    foodX: randomizer(0, boardwidth - 10),
    foodY: randomizer(0, boardHeight - 10),
    score: 0,
  };
};
