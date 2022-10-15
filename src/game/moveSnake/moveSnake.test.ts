import { SnakePart } from "../../types";
import { moveSnake } from "./moveSnake";

describe("moveSnake", () => {
  const initalSnake: SnakePart[] = [
    { x: 200, y: 200 },
    { x: 190, y: 200 },
    { x: 180, y: 200 },
    { x: 170, y: 200 },
    { x: 160, y: 200 },
  ];

  it("move to the right, without eating", () => {
    const dx = 10;
    const dy = 0;
    const hasEatenFood = false;

    const movedSnake = [
      { x: 210, y: 200 },
      { x: 200, y: 200 },
      { x: 190, y: 200 },
      { x: 180, y: 200 },
      { x: 170, y: 200 },
    ];

    const result = moveSnake(initalSnake, dx, dy, hasEatenFood);
    expect(result).toEqual(movedSnake);
  });

  it("move to the right, with eating", () => {
    const dx = 10;
    const dy = 0;
    const hasEatenFood = true;

    const movedSnake = [
      { x: 210, y: 200 },
      { x: 200, y: 200 },
      { x: 190, y: 200 },
      { x: 180, y: 200 },
      { x: 170, y: 200 },
      { x: 160, y: 200 },
    ];

    const result = moveSnake(initalSnake, dx, dy, hasEatenFood);
    expect(result).toEqual(movedSnake);
  });

  it("move to the left, without eating", () => {
    const snake = initalSnake.slice().reverse();
    const dx = -10;
    const dy = 0;
    const hasEatenFood = false;

    const movedSnake = [
      { x: 150, y: 200 },
      { x: 160, y: 200 },
      { x: 170, y: 200 },
      { x: 180, y: 200 },
      { x: 190, y: 200 },
    ];

    const result = moveSnake(snake, dx, dy, hasEatenFood);
    expect(result).toEqual(movedSnake);
  });

  it("move to the left, with eating", () => {
    const snake = initalSnake.slice().reverse();
    const dx = -10;
    const dy = 0;
    const hasEatenFood = true;

    const movedSnake = [
      { x: 150, y: 200 },
      { x: 160, y: 200 },
      { x: 170, y: 200 },
      { x: 180, y: 200 },
      { x: 190, y: 200 },
      { x: 200, y: 200 },
    ];

    const result = moveSnake(snake, dx, dy, hasEatenFood);
    expect(result).toEqual(movedSnake);
  });

  it("move up, without eating", () => {
    const dx = 0;
    const dy = 10;
    const hasEatenFood = false;

    const movedSnake = [
      { x: 200, y: 210 },
      { x: 200, y: 200 },
      { x: 190, y: 200 },
      { x: 180, y: 200 },
      { x: 170, y: 200 },
    ];

    const result = moveSnake(initalSnake, dx, dy, hasEatenFood);
    expect(result).toEqual(movedSnake);
  });

  it("move up, with eating", () => {
    const dx = 0;
    const dy = 10;
    const hasEatenFood = true;

    const movedSnake = [
      { x: 200, y: 210 },
      { x: 200, y: 200 },
      { x: 190, y: 200 },
      { x: 180, y: 200 },
      { x: 170, y: 200 },
      { x: 160, y: 200 },
    ];

    const result = moveSnake(initalSnake, dx, dy, hasEatenFood);
    expect(result).toEqual(movedSnake);
  });

  it("move down, without eating", () => {
    const dx = 0;
    const dy = -10;
    const hasEatenFood = false;

    const movedSnake = [
      { x: 200, y: 190 },
      { x: 200, y: 200 },
      { x: 190, y: 200 },
      { x: 180, y: 200 },
      { x: 170, y: 200 },
    ];

    const result = moveSnake(initalSnake, dx, dy, hasEatenFood);
    expect(result).toEqual(movedSnake);
  });

  it("move down, with eating", () => {
    const dx = 0;
    const dy = -10;
    const hasEatenFood = true;

    const movedSnake = [
      { x: 200, y: 190 },
      { x: 200, y: 200 },
      { x: 190, y: 200 },
      { x: 180, y: 200 },
      { x: 170, y: 200 },
      { x: 160, y: 200 },
    ];

    const result = moveSnake(initalSnake, dx, dy, hasEatenFood);
    expect(result).toEqual(movedSnake);
  });
});
