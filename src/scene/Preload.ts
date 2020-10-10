class Preload extends Phaser.Scene {
    private loadingText: Phaser.GameObjects.Text;

    constructor() {
        super("preload");
    }

    create() {
        let width: number = this.cameras.main.width;
        let height: number = this.cameras.main.height;

        this.loadingText = this.add.text(width / 2, height / 2, "Loading", {font: "40px Colibri", fill: "black"});
        this.loadingText.setOrigin(0.5);
        this.add.existing(this.loadingText);

        //images
        this.load.image("background", "assets/background.png");
        this.load.atlas("images", "assets/images.png", "assets/images.json");
        this.load.image("hmm", "assets/hmm screen.png");
        this.load.image("rareBird", "assets/rare bird.png");

        //load code
        this.load.on("load", this.onFileLoaded, this);
        this.load.on("complete", this.onComplete, this);

        this.load.start();
    }

    private onFileLoaded(): void {
        this.loadingText.text += "..";
    }

    private onComplete(): void {
        console.log("load complete");

        this.scene.start("mainMenu");
    }
}

export { Preload }