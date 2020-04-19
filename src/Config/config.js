import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'billy-the-jumper',
  width: 800,
  height: 600,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  dom: {
    createContainer: true
  },
  physics: {
    default: 'arcade',
    arcade: {
/*       gravity: { y: 300 }, */
      debug: false
    }
  },
};