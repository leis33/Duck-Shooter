class Exit extends Phaser.Scene {
    private hmm: Phaser.GameObjects.Sprite;

    constructor() {
        super("exit")
    }

    create() {
        this.hmm = new Phaser.GameObjects.Sprite(this, 0, 0, "hmm");
        this.hmm.setPosition(this.cameras.main.width / 2, this.cameras.main.height / 2);
        this.add.existing(this.hmm);
    }
}

export { Exit }