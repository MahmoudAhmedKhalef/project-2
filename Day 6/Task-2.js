/*
TASK2:-

add (customFilter) function to the prototype of array
customFilter should return only items that pass its callback in new array

 */
Array.prototype.customFilter = function(callback) {
    let filteredArr =[];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArr.push(this[i]);
        }
    }
    return filteredArr;
};

let arr = [1, 2, 3, 4, 5];
let filteredArr = arr.customFilter(function(element) {
    return element % 2 == 0;
});
console.log(`Filtered Array : ${filteredArr}`);