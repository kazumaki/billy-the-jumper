export default class Model {
  constructor() {
    this.localSoundOn = true;
    this.localMusicOn = true;
    this.localBgMusicPlaying = false;
  }

  set musicOn(value) {
    this.localMusicOn = value;
  }

  get musicOn() {
    return this.localMusicOn;
  }

  set soundOn(value) {
    this.localSoundOn = value;
  }

  get soundOn() {
    return this.localSoundOn;
  }

  set bgMusicPlaying(value) {
    this.localBgMusicPlaying = value;
  }

  get bgMusicPlaying() {
    return this.localBgMusicPlaying;
  }
}