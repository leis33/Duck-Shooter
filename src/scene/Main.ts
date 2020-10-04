import { BirdGraphic } from "../game graphic/BirdGraphic";

class Main extends Phaser.Scene {
    private birdGraphic: BirdGraphic;
    private background: Phaser.GameObjects.Sprite;

    constructor() {
        super("main");
    }

    create() {
        this.background = new Phaser.GameObjects.Sprite(this, this.cameras.main.width / 2, this.cameras.main.height / 2, "background");
        this.add.existing(this.background);

        this.birdGraphic = new BirdGraphic(this);
        this.add.existing(this.birdGraphic);
    }

    update() {
        this.birdGraphic.update();
    }
}

export { Main }