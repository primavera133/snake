import { SCORE_PER_FOOD } from "../../config";
import { updateScore } from "./updateScore";

describe("updateScore", () => {
  it("returns new Score", () => {
    const score = 0;
    const result = updateScore(0);
    expect(result).toBe(score + SCORE_PER_FOOD);
  });
});
