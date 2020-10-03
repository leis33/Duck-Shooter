class Preload extends Phaser.Scene {
    private loadingText: Phaser.GameObjects.Text;

    constructor() {
        super("preload");
    }

    create() {
        let width: number = this.cameras.main.width;
        let height: number = this.cameras.main.height;

        this.loadingText = this.add.text(width / 2, height / 2, "Loading", {font: "40px Colibri", fill: "black"});
        this.add.existing(this.loadingText);

        this.load.image("background", "assets/background.png");
        this.load.image("logo", "assets/logo.png");

        this.load.on("load", this.onFileLoaded, this);
        this.load.on("complete", this.onComplete, this);

        this.load.start();
    }

    private onFileLoaded(): void {
        setInterval(() => {
            this.loadingText.text += ".";
        }, 10)
    }

    private onComplete(): void {
        console.log("load complete");

        this.scene.start("mainMenu");
    }
}

export { Preload }