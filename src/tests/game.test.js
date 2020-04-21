import Game from '../Objects/Game';

let game;

beforeAll(() => {
  game = new Game();
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