import { config as c } from "./config";
import { state as s } from "./state";

export function updateScore() {
  if (!c.scoreBoard) return;
  c.scoreBoard.innerHTML = s.score.toString();
}
