class MainMenu extends Phaser.Scene {
    private background: Phaser.GameObjects.Sprite;
    private logo: Phaser.GameObjects.Sprite;

    constructor() {
        super("mainMenu");
    }

    create() {
        this.background = new Phaser.GameObjects.Sprite(this, 0, 0, "background");
        this.background.setPosition(this.cameras.main.width / 2, this.cameras.main.height / 2);
        this.add.existing(this.background);

        this.logo = new Phaser.GameObjects.Sprite(this, this.cameras.main.width / 2, this.cameras.main.width * 0.2, "logo");
        this.add.existing(this.logo);
    }

}

export { MainMenu }