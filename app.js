var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create
  }
};

var game = new Phaser.Game(config);
var score = 0;
var scoreEl = document.getElementById("score");

function preload() {
  this.load.image("burger", "assets/ham.jpg");
  this.load.image("explosion", "assets/bomb.png");
}
function create() {
  makeSprite(this, "burger");
  makeSprite(this, "burger");
  makeSprite(this, "burger");

  makeSprite(this, "explosion");
  makeSprite(this, "explosion");
}

function makeSprite(fakeThis, name) {
  var sprite = fakeThis.physics.add.image(
    Phaser.Math.Between(0, 800),
    300,
    name
  );
  sprite.setCollideWorldBounds(true);
  sprite.setBounceX(1);
  sprite.setBounceY(1);

  sprite.setInteractive();
  sprite.on("pointerdown", function () {
    if (name === "burger") {
      score = score + 1;
    } else if (name === "explosion") {
      score = score - 1;
    }
    scoreEl.innerHTML = score;
  });

  var vx = Phaser.Math.Between(100, 200);
  var vy = Phaser.Math.Between(100, 200);
  sprite.setVelocity(vx, vy);
  // sprite.setVelocity(100, 100);
}
