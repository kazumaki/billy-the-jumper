import 'phaser';

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
  }

  submitScore(event) {
    event.preventDefault();
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
    .then(response => response.json())
    .then(this.scene.start('Score'));
  }

  update() {

  }
}