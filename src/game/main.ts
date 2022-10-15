import PubSub from "pubsub-js";
import { pubSubEvents } from "../config";
import { randomizer } from "../helpers";
import {
  BoardConfig,
  DirectionInput,
  GameState,
  SnakePart,
  State,
} from "../types";
import { clearBoard } from "./clearBoard";
import { drawSnake, getSnakeDrawConfig } from "./drawSnake.ts";
import { didSnakeEatFood, drawFood } from "./food";
import { generateFood } from "./food/generateFood";
import { drawGameOver, hasGameEnded } from "./gameOver";
import { moveSnake } from "./moveSnake";
import { changeDirection } from "./moveSnake/changeDirection";
import { updateScore } from "./score";

export const startGame = (
  ctx: CanvasRenderingContext2D,
  boardConfig: BoardConfig,
  gameState: GameState
) => {
  const gameTickSpeed = 100;

  PubSub.subscribe(
    pubSubEvents.KEYPRESS,
    (msg: string, code: DirectionInput) => {
      const newDirection = changeDirection(code, {
        dx: state.dx,
        dy: state.dy,
      });
      if (newDirection) {
        updateState({
          ...state,
          dx: newDirection.dx,
          dy: newDirection.dy,
        });
      }
    }
  );

  let state: State = {
    snake: [
      { x: 200, y: 200 },
      { x: 190, y: 200 },
      { x: 180, y: 200 },
      { x: 170, y: 200 },
      { x: 160, y: 200 },
    ],
    dx: 10,
    dy: 0,
    foodX: randomizer(0, boardConfig.width - 10),
    foodY: randomizer(0, boardConfig.height - 10),
    score: 0,
  };

  function updateState(newState: State): void {
    state = {
      ...newState,
    };
  }

  function main() {
    setTimeout(function onTick() {
      /**
       *  calculate new state
       */
      const hasEatenFood = didSnakeEatFood(
        state.snake,
        state.foodX,
        state.foodY
      );

      const movedSnake: SnakePart[] = moveSnake(
        state.snake,
        state.dx,
        state.dy,
        hasEatenFood
      );

      if (hasEatenFood) {
        const newScore = updateScore(state.score);
        do {
          const newFood = generateFood(boardConfig.width, boardConfig.height);
          updateState({
            ...state,
            foodX: newFood.foodX,
            foodY: newFood.foodY,
            score: newScore,
          });
        } while (didSnakeEatFood(state.snake, state.foodX, state.foodY));
      }

      updateState({
        ...state,
        snake: movedSnake,
      });

      const gameOver = hasGameEnded(
        state.snake,
        boardConfig.width,
        boardConfig.height
      );
      if (gameOver) {
        PubSub.publish(pubSubEvents.GAMESTATE, {
          ...gameState,
          gameOver,
        });
      }

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

        drawSnake(getSnakeDrawConfig(state.snake), ctx);
        drawFood(ctx, state.foodX, state.foodY);
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
