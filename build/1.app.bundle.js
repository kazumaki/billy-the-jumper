(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1467:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(61),t.default={type:Phaser.AUTO,parent:"billy-the-jumper",width:800,height:600}},1468:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(61);var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"Game"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.Scene),o(t,[{key:"preload",value:function(){this.load.image("logo","assets/logo.png")}},{key:"create",value:function(){this.add.image(400,300,"logo")}}]),t}();t.default=i},1469:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(61);var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"Boot"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.Scene),o(t,[{key:"preload",value:function(){this.load.image("logo","assets/logo.png")}},{key:"create",value:function(){this.scene.start("Preloader")}}]),t}();t.default=i},1470:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(61);var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"Preloader"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.Scene),o(t,[{key:"preload",value:function(){this.add.image(400,200,"logo");var e=this.add.graphics(),t=this.add.graphics();t.fillStyle(2236962,.8),t.fillRect(240,270,320,50);var n=this.cameras.main.width,o=this.cameras.main.height,i=this.make.text({x:n/2,y:o/2-50,text:"Loading...",style:{font:"20px monospace",fill:"#ffffff"}});i.setOrigin(.5,.5);var r=this.make.text({x:n/2,y:o/2-5,text:"0%",style:{font:"18px monospace",fill:"#ffffff"}});r.setOrigin(.5,.5);var s=this.make.text({x:n/2,y:o/2+50,text:"",style:{font:"18px monospace",fill:"#ffffff"}});s.setOrigin(.5,.5),this.load.on("progress",(function(t){r.setText(parseInt(100*t)+"%"),e.clear(),e.fillStyle(16777215,1),e.fillRect(250,280,300*t,30)})),this.load.on("fileprogress",(function(e){s.setText("Loading asset: "+e.key)})),this.load.on("complete",function(){e.destroy(),t.destroy(),i.destroy(),r.destroy(),s.destroy(),this.ready()}.bind(this)),this.timedEvent=this.time.delayedCall(3e3,this.ready,[],this),this.load.image("phaserLogo","assets/logo.png"),this.load.image("box","assets/ui/check_box.png"),this.load.image("checkedBox","assets/ui/check_box_checked.png"),this.load.image("blueButton1","assets/ui/button_1.png"),this.load.image("blueButton2","assets/ui/button_2.png"),this.load.audio("bgMusic",["assets/songs/intro.wav"])}},{key:"create",value:function(){}},{key:"init",value:function(){this.readyCount=0}},{key:"ready",value:function(){this.scene.start("Title"),this.readyCount++,2===this.readyCount&&this.scene.start("Title")}}]),t}();t.default=i},1471:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(61);var i=s(n(1467)),r=s(n(1476));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"Title"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.Scene),o(t,[{key:"create",value:function(){this.gameButton=new r.default(this,i.default.width/2,i.default.height/2-50,"blueButton1","blueButton2","Play","Game"),this.optionsButton=new r.default(this,i.default.width/2,i.default.height/2,"blueButton1","blueButton2","Options","Options"),this.creditsButton=new r.default(this,i.default.width/2,i.default.height/2+50,"blueButton1","blueButton2","Credits","Credits"),this.model=this.sys.game.globals.model,!0===this.model.musicOn&&!1===this.model.bgMusicPlaying&&(this.bgMusic=this.sound.add("bgMusic",{volume:.5,loop:!0}),this.bgMusic.play(),this.model.bgMusicPlaying=!0,this.sys.game.globals.backgroundMusic=this.bgMusic)}}]),t}();t.default=u},1472:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(61);var i,r=n(1476),s=(i=r)&&i.__esModule?i:{default:i};var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"Options"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.Scene),o(t,[{key:"create",value:function(){this.model=this.sys.game.globals.model,this.text=this.add.text(300,100,"Options",{fontSize:40}),this.musicButton=this.add.image(200,200,"checkedBox"),this.musicText=this.add.text(250,190,"Music Enabled",{fontSize:25}),this.soundButton=this.add.image(200,300,"checkedBox"),this.soundText=this.add.text(250,290,"Sound Enabled",{fontSize:24}),this.musicButton.setInteractive(),this.soundButton.setInteractive(),this.musicButton.on("pointerdown",function(){this.model.musicOn=!this.model.musicOn,this.updateAudio()}.bind(this)),this.soundButton.on("pointerdown",function(){this.model.soundOn=!this.model.soundOn,this.updateAudio()}.bind(this)),this.updateAudio(),this.menuButton=new s.default(this,400,500,"blueButton1","blueButton2","Menu","Title"),this.menuText=this.add.text(0,0,"Menu",{fontSize:"32px",fill:"#fff"}),Phaser.Display.Align.In.Center(this.menuText,this.menuButton)}},{key:"updateAudio",value:function(){!1===this.model.musicOn?(this.sys.game.globals.backgroundMusic.stop(),this.musicButton.setTexture("box"),this.model.bgMusicPlaying=!1):(this.musicButton.setTexture("checkedBox"),!1===this.model.bgMusicPlaying&&(this.sys.game.globals.backgroundMusic.play(),this.model.bgMusicPlaying=!0)),!1===this.model.soundOn?this.soundButton.setTexture("box"):this.soundButton.setTexture("checkedBox")}}]),t}();t.default=u},1473:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(61);var i,r=n(1467),s=(i=r)&&i.__esModule?i:{default:i};var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"Credits"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.Scene),o(t,[{key:"preload",value:function(){}},{key:"create",value:function(){var e=this;this.creditsText=this.add.text(0,0,"Credits",{fontSize:"32px",fill:"#fff"}),this.madeByText=this.add.text(0,0,"Created By: Kazumaki",{fontSize:"26px",fill:"#fff"}),this.zone=this.add.zone(s.default.width/2,s.default.height/2,s.default.height),Phaser.Display.Align.In.Center(this.creditsText,this.zone),Phaser.Display.Align.In.Center(this.madeByText,this.zone),this.madeByText.setY(1e3),this.creditsTween=this.tweens.add({targets:this.creditsText,y:-100,ease:"Power1",duration:3e3,delay:1e3,onComplete:function(){return e.destroy}}),this.madeByTween=this.tweens.add({targets:this.madeByText,y:-300,ease:"Power1",duration:8e3,delay:1e3,onComplete:function(){this.madeByTween.destroy,this.scene.start("Title")}.bind(this)})}}]),t}();t.default=u},1474:function(e,t,n){"use strict";n(61);var o=f(n(1467)),i=f(n(1468)),r=f(n(1469)),s=f(n(1470)),u=f(n(1471)),a=f(n(1472)),c=f(n(1473)),l=f(n(1475));function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,o.default)),n=new l.default;return e.globals={model:n,backgroundMusic:null},e.scene.add("Boot",r.default),e.scene.add("Preloader",s.default),e.scene.add("Title",u.default),e.scene.add("Options",a.default),e.scene.add("Credits",c.default),e.scene.add("Game",i.default),e.scene.start("Boot"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.Game),t}();window.game=new d},1475:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._soundOn=!0,this._musicOn=!0,this._bgMusicPlaying=!1}return o(e,[{key:"musicOn",set:function(e){this._musicOn=e},get:function(){return this._musicOn}},{key:"soundOn",set:function(e){this._soundOn=e},get:function(){return this._soundOn}},{key:"bgMusicPlaying",set:function(e){this._bgMusicPlaying=e},get:function(){return this._bgMusicPlaying}}]),e}();t.default=i},1476:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(61);var o=function(e){function t(e,n,o,i,r,s,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.scene=e,a.x=n,a.y=o,a.button=a.scene.add.sprite(0,0,i).setInteractive(),a.text=a.scene.add.text(0,0,s,{fontSize:"32px",fill:"#fff"}),Phaser.Display.Align.In.Center(a.text,a.button),a.add(a.button),a.add(a.text),a.button.on("pointerdown",(function(){return a.scene.scene.start(u)})),a.button.on("pointerover",(function(){return a.button.setTexture(r)})),a.button.on("pointerout",(function(){return a.button.setTexture(i)})),a.scene.add.existing(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.GameObjects.Container),t}();t.default=o}}]);