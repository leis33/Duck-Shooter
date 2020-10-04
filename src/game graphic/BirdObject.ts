class Bird extends Phaser.GameObjects.Sprite {
    private moveSpeed: number;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string) {
        super(scene, x, y, texture, frame);

        this.moveSpeed = 0;
    }

    set movementSpeed(val: number) {
        this.moveSpeed = val;
    }

    get movementSpeed(): number {
        return this.moveSpeed;
    }
}

export { Bird }