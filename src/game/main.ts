import { clearBoard } from "./clearBoard";
import { drawSnake, getSnakeDrawConfig } from "./drawSnake.ts";
import { drawGameOver, hasGameEnded } from "./gameOver";
import { moveSnake } from "./moveSnake";
import {
  BoardConfig,
  DirectionInput,
  GameState,
  SnakePart,
  SnakeState,
} from "../types";
import React from "react";
import { changeDirection } from "./moveSnake/changeDirection";

export const startGame = (
  ctx: CanvasRenderingContext2D,
  boardConfig: BoardConfig,
  gameState: GameState
) => {
  const gameTickSpeed = 100;

  const handleKeyPress = (msg: string, code: DirectionInput) => {
    const newDirection = changeDirection(code, {
      dx: snakeState.dx,
      dy: snakeState.dy,
    });
    if (newDirection) {
      updateSnakeState({
        ...snakeState,
        dx: newDirection.dx,
        dy: newDirection.dy,
      });
    }
  };

  PubSub.subscribe("KEYPRESS", handleKeyPress);

  function updateSnakeState(newSnakeState: SnakeState): void {
    snakeState = {
      ...newSnakeState,
    };
  }

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

  function main() {
    setTimeout(function onTick() {
      /**
       *  calculate new state
       */
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
        boardConfig.width,
        boardConfig.height
      );
      PubSub.publish("GAMESTATE", {
        ...gameState,
        gameOver,
      });

      /**
       * render
       */
      if (!gameOver) {
        clearBoard(
          ctx,
          boardConfig.width,
          boardConfig.height,
          boardConfig.boardBackground,
          boardConfig.boardBorder
        );

        drawSnake(getSnakeDrawConfig(snakeState.snake), ctx);
        // drawFood();
      }

      if (gameOver) {
        drawGameOver(ctx);
      }

      // reset cycle
      // s.isChangingDirection = false;

      /**
       * repeat
       */
      if (!gameOver) {
        main();
      }
    }, gameTickSpeed);
  }
  main();
};
