/* import 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

let player;
let platforms;
let cursors;
let lastState = 'right';

function preload () {
  this.load.image('platform', 'assets/platform.png');
  this.load.spritesheet(
      'goat',
      'assets/goat_main.png',
      { frameWidth: 68, frameHeight: 54 }
    );
}

function create () {
  platforms = this.physics.add.staticGroup();
  platforms.create(400, 568, 'platform').setScale(2).refreshBody();
  platforms.create(600, 400, 'platform');
  platforms.create(50, 250, 'platform');
  platforms.create(750, 220, 'platform');
  player = this.physics.add.sprite(100, 450, 'goat');

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  player.body.setGravityY(300);

  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('goat', { start: 0, end: 3}),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('goat', { start: 4, end: 7}),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: 'away-left',
    frames: this.anims.generateFrameNumbers('goat', {start: 8, end: 11}),
    frameRate: 1,
    repeat: -1
  })

  this.anims.create({
    key: 'away-right',
    frames: this.anims.generateFrameNumbers('goat', {start: 12, end: 15}),
    frameRate: 1,
    repeat: -1
  })

  this.physics.add.collider(player, platforms);

  cursors = this.input.keyboard.createCursorKeys();
}

function update () {
  if (cursors.left.isDown)
  {
      player.setVelocityX(-160);
      player.anims.play('left', true);
      lastState = 'left';
  }
  else if (cursors.right.isDown)
  {
      player.setVelocityX(160);
      player.anims.play('right', true);
      lastState = 'right';
  }
  else
  {
    player.setVelocityX(0);
    if (lastState == 'right') {
      player.anims.play('away-right', true);
    }
    else {
      player.anims.play('away-left', true);
    }
  }

  if (cursors.down.isDown)
  {
    console.log('meminho');
    player.setVelocityY(500);
  }
  
  if (cursors.up.isDown && player.body.touching.down)
  {
    player.setVelocityY(-450);
  }
} */

import 'phaser';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();