import 'phaser';
import Player from '../Objects/Player';

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
    this.cursors = this.input.keyboard.createCursorKeys();

    this.platformGroup = this.add.group({
      removeCallback: (platform) => platform.scene.platformPool.add(platform)
    });

    this.platformPool = this.add.group({
      removeCallback: (platform) => platform.scene.platformGroup.add(platform)
    });
    
    this.playerJumps = 0;
    this.addPlatform(800, 800 / 2);
    
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('goat', { start: 4, end: 7}),
      frameRate: 10,
      repeat: -1
    });

    this.player = Player(this);
    this.input.on('pointerdown', this.player.jump, this);


/*     this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('goat', { start: 0, end: 3}),
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
    }) */
    

    this.physics.add.collider(this.player.controller, this.platformGroup);
  }
  
  addPlatform(platformWidth, posX) {
    let platform;

    if(this.platformPool.getLength()) {
      platform = this.platformPool.getFirst();
      platform.x = posX;
      platform.active = true;
      platform.visible = true;
      this.platformPool.remove(platform);
    }
    else {
      platform = this.physics.add.sprite(posX, 600 * 0.8, "platform");
      platform.setImmovable(true);
      platform.setVelocityX(350 * -1);
      this.platformGroup.add(platform);
    }

    platform.displayWidth = platformWidth;
    this.nextPlatformDistance = Phaser.Math.Between(50, 100);
  }

  update () {
    this.player.controller.x = 200;  
    // recycling platforms
    let minDistance = 800;
    this.platformGroup.getChildren().forEach(function(platform){
        let platformDistance = 800 - platform.x - platform.displayWidth / 2;
        minDistance = Math.min(minDistance, platformDistance);
        if(platform.x < - platform.displayWidth / 2){
            this.platformGroup.killAndHide(platform);
            this.platformGroup.remove(platform);
        }
    }, this);

    // adding new platforms
    if(minDistance > this.nextPlatformDistance){
        var nextPlatformWidth = Phaser.Math.Between(100, 350);
        this.addPlatform(nextPlatformWidth, 800 + 800 / 2);
    }
  
    if (this.cursors.down.isDown)
    {
      console.log('meminho');
      this.player.controller.setVelocityY(500);
    }
    
/*     if (this.cursors.up.isDown)
    {
      this.player.jump();
    } */
  }
};