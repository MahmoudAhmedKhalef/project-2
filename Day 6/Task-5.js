/*

TASK5:-

Class square inhiert from Rectangle (Note: square have equal width & height);
class sqaure should have all methods definded in Rectangle class

 */
class square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}
let sqr = new square(3);
console.log(sqr.width);
console.log(sqr.height);
console.log(sqr.getArea());
console.log(sqr.getPerimeter());
sqr.draw('*')