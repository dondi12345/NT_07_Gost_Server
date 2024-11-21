import { BrickNumbers } from "../Config/JumpBrickCf";
import { Brick, Position } from "../Model/Brick";
import { Stage } from "../Model/Stage";

class JumpBrickCtrl {
    InitStage(width: number, height: number) {
        let stage = new Stage();
        var index = 0;
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height + i % 2; j++) {
                let brick = new Brick();
                brick.Index = index;
                index++;
                brick.pos = new Position();
                brick.pos.x = i;
                brick.pos.y = j;
                brick.value = BrickNumbers[Math.floor(Math.random() * BrickNumbers.length)];
                stage.bricks.push(brick);
            }
        }
        stage.value = 0;
        var listStartBrick = stage.bricks.filter(x => x.pos.x == 0);
        var startBrick = listStartBrick[Math.floor(Math.random() * listStartBrick.length)];
        var currentBrick = startBrick;
        while(true){
            stage.value += currentBrick.value;
            var nextBricks : Brick[] = stage.bricks.filter(x => x.pos.x == currentBrick.pos.x + 1 && (x.pos.y == currentBrick.pos.y || x.pos.y == currentBrick.pos.y +1));
            if(nextBricks.length == 0){
                break;
            }
            var nextBrick = nextBricks[Math.floor(Math.random() * nextBricks.length)];
            currentBrick = nextBrick;
        }
        return stage;
    }
}

export const jumpBrickCtrl = new JumpBrickCtrl();