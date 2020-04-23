import 'phaser';

export default class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key1, key2, text, targetScene) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.key1 = key1;
    this.key2 = key2;
    this.targetScene = targetScene;
    this.hoverSound = this.scene.sound.add('menuHover');
    this.selectSound = this.scene.sound.add('menuSelect');

    this.button = this.scene.add.sprite(0, 0, key1).setInteractive();
    this.text = this.scene.add.text(0, 0, text, { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.text, this.button);

    this.add(this.button);
    this.add(this.text);

    this.button.on('pointerdown', this.pointerdown.bind(this));
    this.button.on('pointerover', this.pointerover.bind(this));
    this.button.on('pointerout', () => this.button.setTexture(key1));

    this.scene.add.existing(this);
  }

  pointerover() {
    if (this.scene.sys.game.globals.model.soundOn) {
      this.hoverSound.play();
    }

    this.button.setTexture(this.key2);
  }

  pointerdown() {
    if (this.scene.sys.game.globals.model.soundOn) {
      this.selectSound.play();
    }
    this.scene.scene.start(this.targetScene);
  }
}