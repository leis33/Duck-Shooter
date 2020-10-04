class MainMenu extends Phaser.Scene {
    private background: Phaser.GameObjects.Sprite;
    private logo: Phaser.GameObjects.Sprite;
    private playBtn: Phaser.GameObjects.Sprite;
    private quitBtn: Phaser.GameObjects.Sprite;

    constructor() {
        super("mainMenu");
    }

    create() {
        this.cameras.main.fadeIn(1500);

        let width: number = this.cameras.main.width;
        let height: number = this.cameras.main.height;

        this.background = new Phaser.GameObjects.Sprite(this, width / 2, height / 2, "background");
        this.add.existing(this.background);
        
        this.logo = new Phaser.GameObjects.Sprite(this, width / 2, width * 0.15, "images", "logo");
        this.add.existing(this.logo);
        
        this.playBtn = new Phaser.GameObjects.Sprite(this, width / 2, height / 2, "images", "play");
        this.playBtn.setInteractive();
        this.playBtn.addListener("pointerover", () => {
            this.add.sprite(width / 2, height / 2, "images", "playR");
        });
        this.playBtn.addListener("pointerout", () => {
            this.add.sprite(width / 2, height / 2, "images", "play");
        });
        this.playBtn.addListener("pointerdown", () => {
            this.scene.start("main");
        })
        this.add.existing(this.playBtn);
        
        
        this.quitBtn = new Phaser.GameObjects.Sprite(this, width / 2, height * 0.75, "images", "quit");
        this.quitBtn.setInteractive()
        this.quitBtn.addListener("pointerover", () => {
            this.add.sprite(width / 2, height * 0.75, "images", "quitR");
        });
        this.quitBtn.addListener("pointerout", () => {
            this.add.sprite(width / 2, height * 0.75, "images", "quit");
        });
        this.add.existing(this.quitBtn);
        
        this.quitBtn.addListener("pointerdown", () => {
            this.quitBtn.removeInteractive();
            this.playBtn.removeInteractive();
            this.cameras.main.fadeOut(1500);
            setTimeout(() => {
            this.scene.start("exit");
            }, 1500);
        });
    }
}

export { MainMenu }