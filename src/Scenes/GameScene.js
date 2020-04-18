import 'phaser';
import config from '../Config/config'
import Player from '../Objects/Player';
import options from '../Config/options';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
    this._player = null;
    this._platforms = null;
    this._lastState = 'right';
    this._cursors = null;
  }

  preload () {

  }
  
  create () {
    this.cameras.main.setBackgroundColor('0x0c88c7')
    this.startTime = performance.now();
    this.lastTime = performance.now();
    this.score = 0;
    this.scoreText = this.add.text(0, 0, `Score: ${this.score}`, { fontSize: '32px', fill: '#fff'});
    
    this.cursors = this.input.keyboard.createCursorKeys();

    this.platformGroup = this.add.group({
      removeCallback: (platform) => platform.scene.platformPool.add(platform)
    });

    this.platformPool = this.add.group({
      removeCallback: (platform) => platform.scene.platformGroup.add(platform)
    });

    this.addPlatform(config.width, 800 / 2, 600/2);
    
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('goat', { start: 7, end: 4}),
      frameRate: 6,
      repeat: -1
    });

    this.player = Player(this);
    this.input.on('pointerdown', this.player.jump, this);
    this.cursors.up.onDown = this.player.jump;

    this.physics.add.collider(this.player.controller, this.platformGroup, () => {
      if (!this.player.isRunning()) {
        this.player.run();
        this.player.resetJumps();
      }
    });
  }

  getTimeElapsed () {
    return (performance.now() - this.startTime) / 1000;
  }

  setScore () {
    const timeElapsed = this.getTimeElapsed();
    const now = performance.now();
    this.score += (timeElapsed * 0.001 + ((now - this.lastTime) / 1000));
    this.lastTime = now;
  }

  getSpeed () {
    const timeElapsed = this.getTimeElapsed();
    return options.platformSpeed * (timeElapsed / 250 + 1);
  }

  addPlatform(platformWidth, posX, posY) {
    let platform;

    if(this.platformPool.getLength()) {
      platform = this.platformPool.getFirst();
      platform.x = posX;
      platform.y = posY;
      platform.active = true;
      platform.visible = true;
      this.platformPool.remove(platform);
    }
    else {
      platform = this.physics.add.sprite(posX, posY, "platform");
      platform.setImmovable(true);
      this.platformGroup.add(platform);
    }
    console.log(this.getSpeed());
    platform.setVelocityX(-this.getSpeed());
    platform.displayWidth = platformWidth;
    this.nextPlatformDistance = Phaser.Math.Between(50, 100);
  }

  checkPlatforms () {
    let minDistance = config.width;
    this.platformGroup.getChildren().forEach(function(platform){
      let platformDistance = config.width - platform.x - platform.displayWidth / 2;
      minDistance = Math.min(minDistance, platformDistance);
      if(platform.x < - platform.displayWidth / 2){
        this.platformGroup.killAndHide(platform);
        this.platformGroup.remove(platform);
      }
    }, this);

    // adding new platforms
    if(minDistance > this.nextPlatformDistance){
      var nextPlatformWidth = Phaser.Math.Between(100, 350);
      this.addPlatform(nextPlatformWidth, config.width + config.width / 2, Phaser.Math.Between(450, 550));
    }
  }

  update () {
    this.setScore();
    this.scoreText.text = `Score: ${this.score}`;
    this.player.setX(200);
    if (this.player.getY() > 600) {
      this.scene.start('Game');
    }

    this.checkPlatforms();

  }
};