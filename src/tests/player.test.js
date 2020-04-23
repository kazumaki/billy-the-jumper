import Player from '../Objects/Player';
import 'phaser';

let player;

beforeAll(() => {
  player = Player(null);
});

test('isRunning should return false when the game starts', () => {
  expect(player.isRunning()).toBe(false);
});

test('getJumps should return 0 when the game starts', () => {
  expect(player.getJumps()).toBe(0);
});