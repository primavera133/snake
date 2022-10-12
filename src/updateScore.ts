import { board as b } from "./config";
import { state as s } from "./state";

export function updateScore() {
  if (!b.scoreBoard) return;
  b.scoreBoard.innerHTML = s.score.toString();
}
