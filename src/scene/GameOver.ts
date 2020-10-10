class GameOver extends Phaser.Scene {
    private gameOver: Phaser.GameObjects.Sprite;
    private background: Phaser.GameObjects.Sprite;
    private scoreText: Phaser.GameObjects.Text;

    constructor() {
        super("gameover")
    }

    create() {
        this.background = new Phaser.GameObjects.Sprite(this, this.cameras.main.width / 2, this.cameras.main.height / 2, "background");
        this.add.existing(this.background);

        this.gameOver = new Phaser.GameObjects.Sprite(this, this.cameras.main.width / 2, this.cameras.main.height * 0.15, "gameOver");
        this.add.existing(this.gameOver);

        this.scoreText = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, "", {font: "60px Cooper Black", fill: "black"});
        this.scoreText.setOrigin(0.5);
        this.scoreText.text = "";
        this.add.existing(this.scoreText);
    }
}

export { GameOver }