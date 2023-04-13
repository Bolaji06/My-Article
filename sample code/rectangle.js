class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width * this.height;
    }
    rectInfo(){
        console.log(`Rectangle is ${this.width}x${this.height} dimension with ${this.area()} area`);

    }
}
const rect1 = new Rectangle(10, 6);
const rect2 = new Rectangle(20, 10);
const rect3 = new Rectangle(8, 3);

rect1.width = 20;
rect1.height = 20;

const minRect = rect1.area();
console.log(minRect);
rect1.rectInfo()


const midRect = rect2.area();
console.log(midRect);
rect2.rectInfo();

const maxRect = rect3.area();
console.log(maxRect);
rect3.rectInfo();
