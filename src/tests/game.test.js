import Game from '../Objects/Game';
import config from '../Config/config';

let game;

beforeAll(() => {
  game = new Game(config);
});

test('Expect score to be 0 when start the game', () => {
  expect(game.globals.score).toBe(0);
});

test('Expect sound to be enable when the game start', () => {
  expect(game.globals.model.soundOn).toBe(true);
});

test('Expect music to be enable when the game start', () => {
  expect(game.globals.model.musicOn).toBe(true);
});