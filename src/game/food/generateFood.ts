import { randomizer } from "../../helpers";

export const generateFood = (
  boardWidth: number,
  boardHeight: number
): { foodX: number; foodY: number } => {
  return {
    foodX: randomizer(0, boardWidth - 10),
    foodY: randomizer(0, boardHeight - 10),
  };
};
