import 'phaser';
import options from '../Config/options';

const Player = function(scene) {
  let jumps = 0;
  let maxJumps = options.defaultJumpsCount;

  const getScene = () => scene;
  const controller = scene.physics.add.sprite(options.playerStartPosition, 200, 'goat', 12);
  controller.setDepth(1);
  const isTouchingDown = () => controller.body.touching.down;
  const isRunning = () => controller.anims.isPlaying;
  const jumpSound = scene.sound.add('jump');
  
  controller.setGravityY(options.playerGravity);



  const setX = function(x) {
    controller.x = x;
  }

  const getX = () => controller.x;
  const getY = () => controller.y;

  const run = () => controller.anims.play('run');

  const resetJumps = () => jumps = 0;

  const jump = function() {
    if (isTouchingDown() || (jumps > 0 && jumps < maxJumps)) {
      if (scene.sys.game.globals.model.soundOn){
        jumpSound.play();
      }

      controller.anims.stop();
      controller.setVelocityY(options.jumpForce * -1);
      jumps += 1;
    }
  }

  return { getScene, controller, isTouchingDown, isRunning, jump, run, setX, getX, getY, resetJumps }
}

export default Player;