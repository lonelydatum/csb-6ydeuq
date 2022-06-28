var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#CCC",
  physics: {
    default: "arcade"
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);
var cursors;
var cat;
var group;

function preload() {
  this.load.image("garfield", "assets/orange-cat1.png");
  this.load.image("star", "assets/star.png");
}

function create() {
  cursors = this.input.keyboard.createCursorKeys();
  group = this.physics.add.group({ key: "star", frameQuantity: 300 });
  cat = this.physics.add.image(500, 300, "garfield");

  var cats = group.getChildren();

  cats.map(function (justACat) {
    var xRandom = Phaser.Math.Between(0, 800);
    var yRandom = Phaser.Math.Between(0, 600);
    justACat.setPosition(xRandom, yRandom);
    justACat.setScale(2);
  });
  this.physics.add.overlap(cat, group, function (a, star) {
    group.killAndHide(star);
  });
}

function update() {
  if (cursors.right.isDown) {
    cat.setVelocityX(100);
  } else if (cursors.left.isDown) {
    cat.setVelocityX(-100);
  } else if (cursors.up.isDown) {
    cat.setVelocityY(-100);
  } else if (cursors.down.isDown) {
    cat.setVelocityY(100);
  } else {
    cat.setVelocity(0);
  }
}
