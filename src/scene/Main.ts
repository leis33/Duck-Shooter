import { BirdGraphic } from "../game graphic/BirdGraphic";

class Main extends Phaser.Scene {
    private birdGraphic: BirdGraphic;
    private background: Phaser.GameObjects.Sprite;
    private score: Phaser.GameObjects.Text;

    constructor() {
        super("main");
    }

    create() {
        this.background = new Phaser.GameObjects.Sprite(this, this.cameras.main.width / 2, this.cameras.main.height / 2, "rosen");
        this.add.existing(this.background);

        this.birdGraphic = new BirdGraphic(this);
        this.add.existing(this.birdGraphic);

        this.score = this.add.text(this.cameras.main.width - 150, 10, "", {font: "40px Cooper Black", fill: "black"});
        this.score.setOrigin(0.5, 0);
        this.add.existing(this.score);
    }

    update() {
        this.birdGraphic.update();
        this.score.text = this.birdGraphic.scoreText;
    }
}

export { Main }