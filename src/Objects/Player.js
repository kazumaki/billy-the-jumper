import 'phaser';
import options from '../Config/options';

const Player = function(scene) {
  let jumps = 0;
  let maxJumps = options.defaultJumpsCount;

  const getScene = () => scene;
  const controller = scene.physics.add.sprite(options.playerStartPosition, 200, 'goat', 12);
  const isTouchingDown = () => controller.body.touching.down;
  const isRunning = () => controller.anims.isPlaying;
  
  controller.setGravityY(options.playerGravity);



  const setX = function(x) {
    controller.x = x;
  }

  const getX = () => controller.x;
  const getY = () => controller.y;

  const run = () => controller.anims.play('run');

  const jump = function() {
    if (isTouchingDown() || (jumps > 0 && jumps < maxJumps)) {
      if (isTouchingDown()) {
        jumps = 0;
      }
      controller.anims.stop();
      controller.setVelocityY(options.jumpForce * -1);
      jumps += 1;
    }
  }

  return { getScene, controller, isTouchingDown, isRunning, jump, run, setX, getX, getY }
}

export default Player;