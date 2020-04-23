import Game from './Objects/Game';
import config from './Config/config';


window.game = new Game(config);

window.game.scene.start('Boot');
