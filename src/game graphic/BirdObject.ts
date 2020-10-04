class Bird extends Phaser.GameObjects.Sprite {
    private moveSpeed: number;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "images", "bird");

        this.moveSpeed = 0;
    }

    set movementSpeed(val: number) {
        this.moveSpeed = val;
    }

    get movementSpeed() {
        return this.moveSpeed;
    }
}

export { Bird }