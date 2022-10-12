import "./style.css";
import { setupGame } from "./setupGame";
import { clearCanvas } from "./clearCanvas";
import { moveSnake } from "./moveSnake";
import { drawSnake } from "./drawSnake";
import { hasGameEnded } from "./hasGameEnded";
import { drawFood } from "./drawFood";
import { state as s } from "./state";
import { gameOver } from "./gameOver";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div class="scoreboard-wrapper"><div id="scoreboard"></div></div>
    <canvas id="canvas" width="400" height="400"><canvas></canvas>
  </div>
`;

setupGame(
  document.querySelector<HTMLCanvasElement>("#canvas")!,
  document.querySelector<HTMLDivElement>("#scoreboard")!
);

function main() {
  if (hasGameEnded()) {
    gameOver();
    return;
  }
  setTimeout(function onTick() {
    clearCanvas();
    moveSnake();
    drawSnake();
    drawFood();
    s.isChangingDirection = false;
    main();
  }, 100);
}

main();
