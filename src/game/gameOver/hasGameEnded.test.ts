import { hasGameEnded } from "./hasGameEnded";

describe("hasGameEnded", () => {
  it("ends not if hit nothing", () => {
    const snake = [
      { x: 90, y: 50 },
      { x: 80, y: 50 },
      { x: 70, y: 50 },
    ];
    const boardWidth = 100;
    const boardHeight = 100;

    const result = hasGameEnded(snake, boardWidth, boardHeight);

    expect(result).toBe(false);
  });

  it("ends if hits itself", () => {
    const snake = [
      { x: 40, y: 50 },
      { x: 40, y: 60 },
      { x: 50, y: 60 },
      { x: 50, y: 50 },
      { x: 40, y: 50 },
      { x: 30, y: 50 },
    ];
    const boardWidth = 100;
    const boardHeight = 100;

    const result = hasGameEnded(snake, boardWidth, boardHeight);

    expect(result).toBe(true);
  });

  it("ends if hits itself further down", () => {
    const snake = [
      { x: 10, y: 50 },
      { x: 10, y: 60 },
      { x: 20, y: 60 },
      { x: 30, y: 60 },
      { x: 40, y: 60 },
      { x: 50, y: 60 },
      { x: 50, y: 50 },
      { x: 40, y: 50 },
      { x: 30, y: 50 },
      { x: 20, y: 50 },
      { x: 10, y: 50 },
    ];
    const boardWidth = 100;
    const boardHeight = 100;

    const result = hasGameEnded(snake, boardWidth, boardHeight);

    expect(result).toBe(true);
  });

  it("ends if hits right wall", () => {
    const snake = [
      { x: 100, y: 50 },
      { x: 90, y: 50 },
      { x: 80, y: 50 },
    ];
    const boardWidth = 100;
    const boardHeight = 100;

    const result = hasGameEnded(snake, boardWidth, boardHeight);

    expect(result).toBe(true);
  });

  it("ends if hits bottom wall", () => {
    const snake = [
      { x: 100, y: 100 },
      { x: 100, y: 90 },
      { x: 90, y: 90 },
    ];
    const boardWidth = 100;
    const boardHeight = 100;

    const result = hasGameEnded(snake, boardWidth, boardHeight);

    expect(result).toBe(true);
  });

  it("ends if hits left wall", () => {
    const snake = [
      { x: -10, y: 50 },
      { x: 0, y: 50 },
      { x: 10, y: 50 },
    ];
    const boardWidth = 100;
    const boardHeight = 100;

    const result = hasGameEnded(snake, boardWidth, boardHeight);

    expect(result).toBe(true);
  });

  it("ends if hits top wall", () => {
    const snake = [
      { x: 50, y: -10 },
      { x: 50, y: 0 },
      { x: 50, y: 10 },
    ];
    const boardWidth = 100;
    const boardHeight = 100;

    const result = hasGameEnded(snake, boardWidth, boardHeight);

    expect(result).toBe(true);
  });
});
