import p5 from "p5";
import { AbstractSketch } from "../useSketch";

const WIDTH = 600;
const HEIGHT = 600;

export default class SomeSketch extends AbstractSketch<{}> {
    sketch = (s: p5) => {
        // This is how you do those 'global variables'
        let x = 0;

        s.setup = function () {
            s.createCanvas(WIDTH, HEIGHT);
        };

        s.draw = function () {
            s.background(0);
            s.fill("yellow");

            s.rect(x, 50, 100, 100);

            x += 1;
            x %= s.width;
        };
    };
}
