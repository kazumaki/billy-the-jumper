import 'phaser';
import config from '../Config/config';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(0, 0,
      `
      Graphics: \n
      "LPC Goat" by bluecarrot16 \n
      "Platform Tiles" by Akshay V \n
      "Parallax Mountain Background" by GrumpyDiamond \n
      "Cute Clouds Game Ornament" by bevouliin.com \n
      "Rotating Coins" by Puddin \n
      \n
      \n
      Sounds: \n
      "Happy Loops sounds" by Goose Ninja \n
      "16 / 8 bit soundpakc" by JDWasabi \n
      \n
      \n
      Developed By: Vinicius Campos Carvalho
      `, { fontSize: '24px', fill: '#fff' });
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.height);

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone,
    );

    this.madeByText.setY(1000);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete: () => this.destroy,
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete: function complete() {
        this.madeByTween.destroy;
        this.scene.start('Title');
      }.bind(this),
    });
  }
}