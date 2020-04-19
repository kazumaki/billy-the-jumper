import 'phaser';
import config from '.././Config/config';
import Button from '../Objects/Button';

export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }

  create () {
    this.gameButton = new Button(this, config.width/2, config.height/2 - 50, 'blueButton1', 'blueButton2', 'Play', 'Game')
    this.optionsButton = new Button(this, config.width/2, config.height/2, 'blueButton1', 'blueButton2', 'Options', 'Options')
    this.creditsButton = new Button(this, config.width/2, config.height/2 + 50, 'blueButton1', 'blueButton2', 'Credits', 'Credits')

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.menuMusic = this.sound.add('menuSong', { volume: 0.5, loop: true});
      this.menuMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.menuMusic = this.menuMusic;
    }
  }
};