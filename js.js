class Rectangle {
    constructor(height,width) {
        this.height = height;
        this.width = width;
    }
    getS(){
        return this.height*this.width;
    }
    getP(){
        return (this.height+this.width)*2;
    }
}
let my1stRectangle = new Rectangle(50,100);
function drawRectangle(a,b){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    // ctx.beginPath();
    // ctx.moveTo(200,200);
    // ctx.lineTo(200+b,200);
    // ctx.lineTo(200+b,200+a);
    // ctx.lineTo(200,200+a);
    // ctx.lineTo(200,200);
    // ctx.stroke();
    ctx.strokeRect(200,200,b,a);
}
drawRectangle(my1stRectangle.height,my1stRectangle.width);
let p = my1stRectangle.getP();
let s = my1stRectangle.getS();
console.log(p)
console.log(s)