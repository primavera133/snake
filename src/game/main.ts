import { clearBoard } from "./clearBoard";
import { drawSnake, getSnakeDrawConfig } from "./drawSnake.ts";
import { drawGameOver, hasGameEnded } from "./gameOver";
import { moveSnake } from "./moveSnake";
import { BoardState, SnakePart, SnakeState } from "./types";

export const startGame = (ctx: CanvasRenderingContext2D) => {
  const gameTickSpeed = 100;

  let boardState: BoardState = {
    width: 400,
    height: 400,
    boardBorder: "black",
    boardBackground: "white",
  };

  let snakeState: SnakeState = {
    snake: [
      { x: 200, y: 200 },
      { x: 190, y: 200 },
      { x: 180, y: 200 },
      { x: 170, y: 200 },
      { x: 160, y: 200 },
    ],
    dx: 10,
    dy: 0,
  };

  function updateSnakeState(newSnakeState: SnakeState): void {
    snakeState = {
      ...newSnakeState,
    };
  }

  function main() {
    //   if (hasGameEnded()) {
    //     gameOver();
    //     return;
    //   }

    setTimeout(function onTick() {
      // calculate new state
      const hasEatenFood = false;

      const movedSnake: SnakePart[] = moveSnake(
        snakeState.snake,
        snakeState.dx,
        snakeState.dy,
        hasEatenFood
      );

      updateSnakeState({
        ...snakeState,
        snake: movedSnake,
      });

      const gameOver = hasGameEnded(
        snakeState.snake,
        boardState.width,
        boardState.height
      );

      // render
      if (!gameOver) {
        clearBoard(
          ctx,
          boardState.width,
          boardState.height,
          boardState.boardBackground,
          boardState.boardBorder
        );

        drawSnake(getSnakeDrawConfig(snakeState.snake), ctx);
        // drawFood();
      }

      if (gameOver) {
        drawGameOver(ctx);
      }

      // reset cycle
      // s.isChangingDirection = false;

      // repeat
      if (!gameOver) {
        main();
      }
    }, gameTickSpeed);
  }
  main();
};
