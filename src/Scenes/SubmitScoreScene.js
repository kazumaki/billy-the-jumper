import 'phaser';
import config from '../Config/config';

export default class SubmitScoreScene extends Phaser.Scene {
  constructor() {
    super('SubmitScore');
    this.gameID = 'BPZZxYOK0OEXIVgjhDS3';

  }

  preload() {

  }

  create() {
    const text = this.add.text(10, 10, 'Submit your score', { fontSize: '36px', fill: '#fff'});
    this.game = this.sys.game;
    const formElement = this.add.dom(400, 300).createFromCache('scoreForm');
    const submitButton = formElement.getChildByID('submit-score-button');
    submitButton.addEventListener('click', this.submitScore.bind(this));

    this.loading = this.physics.add.sprite(-220, -220, 'loading', 0);
    this.anims.create({
      key: 'loading',
      frames: this.anims.generateFrameNumbers('loading', {start: 0, end: 11}),
      frameRate: 12,
      repeat: -1
    });
  }

  submitScore(event) {
    event.preventDefault();
    this.loading.x = config.width / 2;
    this.loading.y = config.height / 2;
    this.loading.anims.play('loading');
    event.currentTarget.disabled = true;
    const user = document.getElementById('name').value;
    fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.gameID}/scores/`, {
      method: 'post',
      body: JSON.stringify({
        user: user,
        score: Math.round(this.sys.game.globals.score),
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      console.log(response.json());
    })
    .then(result => {
      console.log(result);
      this.scene.start('Score')
    });
  }

  update() {

  }
}