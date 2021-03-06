import 'phaser';
import config from '../Config/config';
import Player from '../Objects/Player';
import options from '../Config/options';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
    this.player = null;
    this.platforms = null;
    this.lastState = 'right';
    this.cursors = null;
  }

  create() {
    this.cameras.main.setBackgroundColor('0x0c88c7');
    this.startTime = performance.now();
    this.lastTime = performance.now();
    this.lastAddedClound = performance.now();
    this.sys.game.globals.menuMusic.stop();
    this.deathSound = this.sound.add('death');
    this.gameMusic = this.sound.add('gameSong', { volume: 0.5, loop: true });
    this.coinSound = this.sound.add('coinCollect');

    if (this.sys.game.globals.model.musicOn) {
      this.gameMusic.play();
    }
    this.score = 0;
    this.coin = 0;
    this.scoreText = this.add.text(0, 0, `Score: ${this.score}`, { fontSize: '32px', fill: '#fff' });

    this.cursors = this.input.keyboard.createCursorKeys();

    this.cloudGroup = this.add.group();
    this.mountainGroup = this.add.group();
    this.coinGroup = this.add.group();

    this.platformGroup = this.add.group({
      removeCallback: (platform) => platform.scene.platformPool.add(platform),
    });

    this.platformPool = this.add.group({
      removeCallback: (platform) => platform.scene.platformGroup.add(platform),
    });

    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('goat', { start: 7, end: 4 }),
      frameRate: 6,
      repeat: -1,
    });

    this.anims.create({
      key: 'coin',
      frames: this.anims.generateFrameNumbers('coin', { start: 0, end: 7 }),
      frameRate: 6,
      repeat: -1,
    });

    this.player = Player(this);
    this.addPlatform(config.width, 800 / 2, 600 / 2);

    this.input.on('pointerdown', this.player.jump, this);
    this.cursors.space.onDown = this.player.jump;
    this.cursors.up.onDown = this.player.jump;

    this.physics.add.collider(this.player.controller, this.platformGroup, () => {
      if (!this.player.isRunning()) {
        this.player.run();
        this.player.resetJumps();
      }
    });
  }

  update() {
    this.setScore();
    this.checkClouds();
    this.scoreText.text = `Score: ${Math.round(this.score)}`;
    this.player.setX(200);
    if (this.player.getY() > 600) {
      if (this.sys.game.globals.model.musicOn) {
        this.gameMusic.stop();
      }
      if (this.sys.game.globals.model.soundOn) {
        this.deathSound.play();
      }
      this.scene.start('SubmitScore');
    }

    this.checkPlatforms();
  }

  checkClouds() {
    const timeElapsed = (performance.now() - this.lastAddedClound) / 1000;

    this.mountainGroup.getChildren().forEach(mountain => {
      if (mountain.x < -780) {
        this.mountainGroup.killAndHide(mountain);
        this.mountainGroup.remove(mountain);
      }
    });

    if (!this.mountainGroup.getLength()) {
      const mountainLarge = this.physics.add.sprite(1200, 500, 'largeMountain');
      const mountainSmall = this.physics.add.sprite(1200 + 775, 550, 'smallMountain');

      mountainLarge.setVelocityX(-150);
      mountainSmall.setVelocityX(-150);

      this.mountainGroup.add(mountainLarge);
      this.mountainGroup.add(mountainSmall);
    }

    this.cloudGroup.getChildren().forEach(cloud => {
      if (cloud.x < -400) {
        this.cloudGroup.killAndHide(cloud);
        this.cloudGroup.remove(cloud);
      }
    });

    if (timeElapsed > 2) {
      if (this.cloudGroup.getLength() < 10) {
        const currentClound = Phaser.Math.Between(1, 2);
        const cloud = this.physics.add.sprite(1200, Phaser.Math.Between(0, 600), `cloud${currentClound}`);
        cloud.setVelocityX(Phaser.Math.Between(-250, -50));
        cloud.displayHeight = 80;
        cloud.displayWidth = 120;
        this.cloudGroup.add(cloud);
      }
      this.lastAddedClound = performance.now();
    }
  }

  getTimeElapsed() {
    return (performance.now() - this.startTime) / 1000;
  }

  setScore() {
    const timeElapsed = this.getTimeElapsed();
    const now = performance.now();
    this.score += ((now - this.lastTime) / 1000) * (timeElapsed / 30 + 1) + this.coin;
    this.coin = 0;
    this.sys.game.globals.score = this.score;
    this.lastTime = now;
  }

  getSpeed() {
    const timeElapsed = this.getTimeElapsed();
    return options.platformSpeed * (timeElapsed / 150 + 1);
  }

  addPlatform(platformWidth, posX, posY) {
    let platform;
    const speed = this.getSpeed();
    if (this.platformPool.getLength()) {
      platform = this.platformPool.getFirst();
      platform.x = posX;
      platform.y = posY;
      platform.active = true;
      platform.visible = true;
      this.platformPool.remove(platform);
    } else {
      platform = this.physics.add.sprite(posX, posY, 'platform');
      platform.setDepth(1);
      platform.setImmovable(true);
      this.platformGroup.add(platform);
    }

    for (let i = 0; i < platformWidth; i += 32) {
      const coin = this.physics.add.sprite(posX - platformWidth / 2 + i, posY - 25, 'coin');
      coin.anims.play('coin');
      coin.setVelocityX(-speed);
      this.physics.add.overlap(coin, this.player.controller, () => {
        this.coin += 1;
        if (this.sys.game.globals.model.soundOn) { this.coinSound.play(); }
        coin.destroy();
      });
      this.coinGroup.add(coin);
    }

    platform.setVelocityX(-speed);
    platform.displayWidth = platformWidth;
    this.nextPlatformDistance = Phaser.Math.Between(50, 100);
  }

  checkPlatforms() {
    let minDistance = config.width;
    this.platformGroup.getChildren().forEach((platform) => {
      const platformDistance = config.width - platform.x - platform.displayWidth / 2;
      minDistance = Math.min(minDistance, platformDistance);
      if (platform.x < -platform.displayWidth / 2) {
        this.platformGroup.killAndHide(platform);
        this.platformGroup.remove(platform);
      }
    }, this);

    if (minDistance > this.nextPlatformDistance) {
      const nextPlatformWidth = Phaser.Math.Between(100, 350);
      this.addPlatform(
        nextPlatformWidth,
        config.width + config.width / 2,
        Phaser.Math.Between(450, 550),
      );
    }
  }
}