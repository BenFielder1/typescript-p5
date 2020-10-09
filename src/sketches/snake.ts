import p5 from "p5";
import { AbstractSketch } from "../useSketch";

const WIDTH = 600;
const HEIGHT = 400;

export default class Snake extends AbstractSketch<{}> {
    sketch = (s: p5) => {
        // This is how you do those 'global variables'
        let snakeX: number[] = [100, 80, 60, 40, 20]
        let snakeY: number[] = [20, 20, 20, 20, 20]
        let direction: string = "r"
        let appleCaught: boolean = true
        let appleX: number = 0
        let appleY: number = 0
        let score: number = 0
        let isDead: boolean = false

        s.setup = function(): void {
            s.createCanvas(WIDTH, HEIGHT);
        };

        s.draw = function(): void {
            s.background(220)
  
            s.stroke(0)
            for (let x: number = 0; x < s.width; x += 20){
                s.line(x, 0, x, 400)
            }
            for (let y: number = 0; y < s.height; y += 20){
                s.line(0, y, 600, y)
            }
  
            s.fill(0, 255, 0)
            if(appleCaught){
                appleX = Math.floor(Math.random()*30)*20
                appleY = Math.floor(Math.random()*20)*20
                appleCaught = false
            }
            s.square(appleX, appleY, 20)
  
            s.fill(255, 0, 0)
            for (let i: number = 0; i < snakeX.length; i++){
                s.square(snakeX[i], snakeY[i], 20)
            }
  
            if(snakeX[0] < 0 || snakeX[0] >= s.width || snakeY[0] < 0 || snakeY[0] >= s.height){
                isDead = true
                s.noLoop()
            }
  
            if(snakeX[0] === appleX && snakeY[0] === appleY){
                appleCaught = true
                score++
                snakeX.push(snakeX[snakeX.length - 1])
                snakeY.push(snakeY[snakeY.length - 1])
            }
  
            for(let i: number = 1; i < snakeX.length; i++){
                if(snakeX[i] === snakeX [0] && snakeY[i] === snakeY[0]){
                    isDead = true
                    s.noLoop()
                }
            }
    
  
            s.fill(0, 0, 255)
            s.textSize(32)
            s.text("Score " + score, 20, 40)
  
            moveSnake()
  
            if(isDead){
                s.fill(255, 255, 0)
                s.textSize(20)
                s.text("You died, hit space to play again", 150, 300)
                reset()
            }
  
            s.frameRate(10)
        };

        function moveSnake(): void{
            for(let i: number = snakeX.length - 1; i > 0; i--){
                snakeX[i] = snakeX[i - 1]
            }
            for(let i: number = snakeY.length - 1; i > 0; i--){
                snakeY[i] = snakeY[i - 1]
            }
            if (direction === "r"){
                snakeX[0] = snakeX[0] + 20
            }
            else if (direction === "l"){
                snakeX[0] = snakeX[0] - 20
            }
            else if (direction === "u"){
                snakeY[0] = snakeY[0] - 20
            }
            else if (direction === "d"){
                snakeY[0] = snakeY[0] + 20
            }
        };

        s.keyPressed = function(): void{
            if(s.keyCode === s.RIGHT_ARROW){
                if(direction != "l"){
                    direction = "r"
                }
            }
            else if(s.keyCode === s.LEFT_ARROW){
                if(direction != "r"){
                    direction = "l"
                }
            }
            else if(s.keyCode === s.UP_ARROW){
                if(direction != "d"){
                    direction = "u"
                }
            }
            else if(s.keyCode === s.DOWN_ARROW){
                if(direction != "u"){
                    direction = "d"
                }
            }
            
            if(s.keyCode === 32){
                if(isDead){
                    isDead = false
                    s.loop()
                }
            }
        };

        function reset(): void{
            snakeX = [100, 80, 60, 40, 20]
            snakeY = [20, 20, 20, 20, 20]
            direction = "r"
            appleCaught = true
            appleX = 0
            appleY = 0
            score = 0
        };
    };
}