import { BirdGraphic } from "../game graphic/BirdGraphic";

class Main extends Phaser.Scene {
    private birdGraphic: BirdGraphic;
    private background: Phaser.GameObjects.Sprite;
    private scoreText: Phaser.GameObjects.Text;

    private timeLeftText: Phaser.GameObjects.Text;
    private timeLeft: number = 60;

    constructor() {
        super("main");
    }

    create() {
        this.background = new Phaser.GameObjects.Sprite(this, this.cameras.main.width / 2, this.cameras.main.height / 2, "background");
        this.add.existing(this.background);

        this.birdGraphic = new BirdGraphic(this);
        this.add.existing(this.birdGraphic);

        this.scoreText = this.add.text(this.cameras.main.width - 150, 10, "", {font: "40px Cooper Black", fill: "black"});
        this.scoreText.setOrigin(0.5, 0);
        this.add.existing(this.scoreText);
        
        this.timeLeftText = this.add.text(this.cameras.main.width / 2, 10, "Time left: 60", {font: "40px Cooper Black", fill: "black"});
        this.timeLeftText.setOrigin(0.5, 0);
        this.add.existing(this.timeLeftText);

        this.updateTimeLeft();

        setTimeout(() => {
            this.scene.start("gameover");
        }, 60000);
    }

    private updateTimeLeft(): void {
        setInterval(() => {
            this.timeLeftText.text = "Time left: " + (--this.timeLeft).toString();
        }, 1000);
    }

    update() {
        this.birdGraphic.update();
        this.scoreText.text = this.birdGraphic.scoreText;
    }
}

export { Main }