import 'phaser';
import options from '../Config/options';

const Player = function(scene) {
  let jumps = 0;
  let maxJumps = options.defaultJumpsCount;

  const getScene = () => scene;
  const controller = scene.physics.add.sprite(options.playerStartPosition, scene.game.config.height / 2, 'goat');
  const isTouchingDown = () => controller.body.touching.down;
  
  controller.setGravityY(options.playerGravity);
  controller.setCollideWorldBounds(true);
  controller.anims.play('right');



  const jump = function() {
    if (isTouchingDown() || (jumps > 0 && jumps < maxJumps)) {
      if (isTouchingDown()) {
        jumps = 0;
      }

      controller.setVelocityY(options.jumpForce * -1);
      jumps += 1;
    }
  }

  return { getScene, controller, isTouchingDown, jump }
}

export default Player;