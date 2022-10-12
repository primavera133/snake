import "./style.css";
import { setupGame } from "./setupGame";
import { clearCanvas } from "./clearCanvas";
import { moveSnake } from "./moveSnake";
import { drawSnake } from "./drawSnake";
import { hasGameEnded } from "./hasGameEnded";
import { drawFood } from "./drawFood";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div id="scoreboard"></div>
    <canvas id="gameCanvas" width="400" height="400"><canvas></canvas>
  </div>
`;

setupGame(
  document.querySelector<HTMLCanvasElement>("#gameCanvas")!,
  document.querySelector<HTMLDivElement>("#scoreboard")!
);

function main() {
  if (hasGameEnded()) {
    return;
  }
  setTimeout(function onTick() {
    clearCanvas();
    moveSnake();
    drawSnake();
    drawFood();
    main();
  }, 100);
}

main();
