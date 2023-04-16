/*
TASK3:-

add (customFill) function to the prototype of arrey
customArrayFill should fill the array with the value passed to customFill and return new array 

 */
Array.prototype.customFill = function (value, start = 0, end = this.length) {
    let filledArr = [...this];
    for (let i =start; i < end; i++) {
        filledArr[i] = value;
    }
    return filledArr;
};

let arr = [1, 2, 3, 4, 5];
console.log(`Filled Array : ${arr.customFill(0, 2, 4)}`);