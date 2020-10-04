import 'phaser';
import { Preload } from './scene/Preload';
import { MainMenu } from './scene/MainMenu';
import { Exit } from './scene/Exit';
import { Main } from './scene/Main';

class GameApp extends Phaser.Game {
    public static gameConfig: Phaser.Types.Core.GameConfig = null;

    constructor(config: Phaser.Types.Core.GameConfig) {
        GameApp.gameConfig = config;

        if (GameApp.gameConfig == null) {
            GameApp.gameConfig = {
                type: Phaser.AUTO,
                parent: "content",
                backgroundColor: '#a0dadb',
                width: 1024,
                height: 768,
                scene: [Preload, MainMenu, Main, Exit]
            };
        }

        super(GameApp.gameConfig);
    }
}

export { GameApp }

new GameApp(null);
