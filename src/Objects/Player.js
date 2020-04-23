import 'phaser';
import options from '../Config/options';

const Player = (scene) => {
  let jumps = 0;
  const maxJumps = options.defaultJumpsCount;
  const getScene = () => scene;
  const controller = scene ? scene.physics.add.sprite(options.playerStartPosition, 200, 'goat', 12) : null;
  if (controller) {
    controller.setDepth(1);
    controller.setGravityY(options.playerGravity);
  }
  const isTouchingDown = () => controller.body.touching.down;
  const isRunning = function running() { return controller ? controller.anims.isPlaying : false; };
  const jumpSound = scene ? scene.sound.add('jump') : null;

  const setX = (x) => { controller.x = x; };

  const getX = () => controller.x;
  const getY = () => controller.y;

  const run = () => controller.anims.play('run');
  const getJumps = () => jumps;
  const resetJumps = () => { jumps = 0; };

  const jump = () => {
    if (isTouchingDown() || (jumps > 0 && jumps < maxJumps)) {
      if (scene.sys.game.globals.model.soundOn) {
        jumpSound.play();
      }

      controller.anims.stop();
      controller.setVelocityY(options.jumpForce * -1);
      jumps += 1;
    }
  };

  return {
    getScene,
    controller,
    isTouchingDown,
    isRunning,
    jump,
    run,
    setX,
    getX,
    getY,
    getJumps,
    resetJumps,
  };
};

export default Player;