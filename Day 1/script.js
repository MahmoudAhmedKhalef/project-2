function closureFunction() {
  let f0 = 0
  let f1 = 1

const myFunction = function () {
   const fC = f0 + f1
   f0 = f1
   f1 = fC
   return fC
  }

   return myFunction
}

const doStuff = closureFunction()
const doAnotherStuff = doStuff

 for (let i = 0; i < 6; i++) {
   console.log(doStuff())
 }

 for (let i = 0; i < 2; i++) {
   console.log(doAnotherStuff())
}

 function fibonacci() {
     let a = 0, b = 1;

     return function() {
       let c = a + b;
       a = b;
       b = c;
       return a;
     }
}

   const fib = fibonacci();
   console.log(fib());
   for (let i = 0; i < 10; i++) {
     console.log(fib());
   }




 function bubbleSort(arr) {
     let n = arr.length;

     for (let i = 0; i < n - 1; i++) {
       for (let j = 0; j < n - i - 1; j++) {
         if (arr[j] > arr[j+1]) {
           let temp = arr[j];
           arr[j] = arr[j+1];
           arr[j+1] = temp;
         }
       }
     }

     return arr;
 }

   let arr = [4, 3, 8, 7, 9,0];
   console.log(bubbleSort(arr));