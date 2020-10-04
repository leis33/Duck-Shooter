import { GameApp } from "../game";
import { Bird } from "./BirdObject";

class BirdGraphic extends Phaser.GameObjects.Container {
    private readonly spawnThreshold: number = 0.95;
    private readonly timeStep: number = 1000;

    private readonly maxHeightSpawn: number = 520;
    private readonly minHeigthSpawn: number = 100;
    private readonly maxMoveSpeed: number = 9;
    private readonly minMoveSpeed: number = 4;

    private timer: Phaser.Time.TimerEvent;
    constructor(scene: Phaser.Scene) {
        super(scene);
        
        this.startSpawning();
    }
    
    public startSpawning(): void {
        if (this.timer != null) {
            this.timer.paused = false;
        } else {
            this.timer = this.scene.time.addEvent({
                delay: this.timeStep,
                loop: true,
                callback: this.spawnObject,
                callbackScope: this
            });
        }
    }
    
    private spawnObject(): void {
        if (Math.random() > this.spawnThreshold) {
            //TODO: implement rare bird here
        }
        else this.spawnBird();
    }

    private spawnBird(): void {
        let x: number = -100;
        let y: number = Math.round(Math.random() * <number>GameApp.gameConfig.height);
        if (y > this.maxHeightSpawn) {
            y = this.maxHeightSpawn;
        } else if (y < this.minHeigthSpawn) {
            y = this.minHeigthSpawn;
        }
        let bird: Bird = new Bird(this.scene, x, y);
        bird.movementSpeed = Math.random() * (this.maxMoveSpeed - this.minMoveSpeed) + this.minMoveSpeed;
        this.add(bird);
    }

    public update(): void {
        if (this.length > 0) {
            for (let obj of this.list) {
                (<Bird>obj).x += (<Bird>obj).movementSpeed;
            }
        }
    }
}

export { BirdGraphic }