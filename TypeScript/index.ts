interface Shape{
    calculateArea(): number;
}

class Square implements Shape{
    name: string
    sideLength: number
    constructor(sideLength: number){
        this.name = "Square"
        this.sideLength = sideLength
    }
    calculateArea(): number{
        return this.sideLength * this.sideLength
    }
}

class Circle implements Shape{
    name: string
    radius: number
    constructor(radius: number){
        this.name = "Circle"
        this.radius = radius
    }
    calculateArea(){
        return Math.PI * this.radius * this.radius
    }
}