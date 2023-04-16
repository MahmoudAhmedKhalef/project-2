/*

TASK4:-

create Rectangle class
Rectangle class should have width & height
Rectangle class should have getter and setter for both width & height
setter for rectangle class should check that width is int (if not throw error with message: width must be integer value)
setter for rectangle class should check that width is positive number (if not throw error with message: width must be positive value)
setter for rectangle class should check that width is int (if not throw error with message: height must be integer value)
setter for rectangle class should check that width is positsve number (if not throw error with message: height must be positive value)
Rectangle class should have method to calcuate Area
Rectangle class should have method to calcuate perimiter
Rectangle class should have method to draw rectangle using input symbol
let rec = new Rectangle(3,5)
rec.draw("o")

 */
class Rectangle {
    #width = 3;
    #height = 5;
    constructor(w, h) {
        if(typeof(w) == 'number' && w > 0) 
        this.#width = w;
        if(typeof(h) == 'number' && h > 0)
        this.#height = h;
    }
    setWidth (w) {
        if(typeof(w) == 'number' && w > 0)
        this.#width = w;
    }
    getWidth () {
        return this.#width;
    }
    setHeight (w) {
        if(typeof(h) == 'number' && h > 0)
        this.#height = h;
    }
    getHeight () {
        return this.#height;
    }
    calcArea () {
        return (this.#width*this.#height);
    }
    calcPrim () {
        return (this.#width+this.#height)*2;
    }
    draw (symbol) {
        let line = '';
        for (let i = 0; i < this .#height; i++) {
            line += symbol[0];
        }
        for (let j = 0; j < this.#height; j++) {
            console.log(line);
        }
    }
}
let s1 = new Rectangle(2,3);
console.log(s1.calcArea());
console.log(s1.calcPrim());
s1.draw('*')