import { expect, test } from "bun:test";
import { cases } from "./cases.js";
import { WhiteElephantGame, validate } from "./problem.js";

test.each(cases)("white elephant script: %j", (input, expected) => {
  expect(validate(input)).toEqual(expected);
});

function seeded(seed) {
  let state = seed;
  return (count) => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return Math.floor((state / 4294967296) * count);
  };
}

test.each([1, 2, 3, 5, 8])("random game with %i players is valid", (players) => {
  for (let seed = 1; seed <= 50; seed += 1) {
    const game = new WhiteElephantGame(players, seeded(seed));
    const moves = [];
    while (!game.gameOver()) moves.push(game.nextMove());

    expect(moves.filter((move) => move.includes("opened"))).toHaveLength(players);
    expect([...game.holdings].sort((a, b) => a - b)).toEqual([...Array(players).keys()]);
    expect(Math.max(...game.stealCounts)).toBeLessThanOrEqual(3);
    expect(game.nextMove()).toStartWith("Game Over!");
  }
});
