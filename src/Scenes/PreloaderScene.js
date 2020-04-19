import 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor () {
    super('Preloader');
  }

  preload () {
    this.add.image(400, 200, 'logo');

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(parseInt(value * 100) + '%')
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText('Loading asset: ' + file.key);
    });

    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    }.bind(this));

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    this.load.image('phaserLogo', 'build/assets/logo.png');
    this.load.image('box', 'build/assets/ui/check_box.png');
    this.load.image('checkedBox', 'build/assets/ui/check_box_checked.png');
    this.load.image('blueButton1', 'build/assets/ui/button_1.png');
    this.load.image('blueButton2', 'build/assets/ui/button_2.png');
    this.load.image('tutorialKeyboard', 'build/assets/ui/small-keyboard.png');

    this.load.image('platform', 'build/assets/gameplay/platform.png');
    this.load.image('cloud1', 'build/assets/gameplay/cloud-1.png');
    this.load.image('cloud2', 'build/assets/gameplay/cloud-2.png');
    this.load.image('smallMountain', 'build/assets/gameplay/smallMountain.png');
    this.load.image('largeMountain', 'build/assets/gameplay/LargeMountain.png');

    this.load.spritesheet(
      'loading',
      'build/assets/ui/loading.png',
      { frameWidth: 220, frameHeight: 220 }
    );

    this.load.spritesheet(
      'goat',
      'build/assets/gameplay/goat_main.png',
      { frameWidth: 68, frameHeight: 54 }
    );
    this.load.html('scoreForm', 'build/assets/ui/score_form.html');

    this.load.audio('menuHover', 'build/assets/songs/menu-hover.wav');
    this.load.audio('menuSelect', 'build/assets/songs/menu-select.wav');
    this.load.audio('jump', 'build/assets/songs/jump.wav');
    this.load.audio('menuSong', 'build/assets/songs/menu-song.wav');
    this.load.audio('gameSong', 'build/assets/songs/game-song.wav');
    this.load.audio('death', 'build/assets/songs/death.wav');
  }

  create () {

  }

  init () {
    this.readyCount = 0;
  }
  
  ready () {
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
};