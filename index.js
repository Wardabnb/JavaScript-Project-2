// String Manipulation Functions
// Reverse a String
function ReverseString(str){
    if(str.length===0 || str.length===1){return str}
    else{
    var reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
}
}
// Count Characters
function CountString(str){
    for(var i in str ){
        ++i;
    }
    return i ;  
}
// Capitalize Words
function CapWords(sent) {
    var res = '';
   
    for (var i = 0; i < sent.length; i++) {
        if (i === 0 || sent[i - 1] === " ") {
            res += sent[i].toUpperCase();
        } else {
            res += sent[i];
        }
    }
    
    return res;
}
// -----------
// Array Functions
// Find Maximum and Minimum

function minmax(Arr){
    var minmax=[Arr[0],Arr[0]]
    for ( var i of Arr){
        if (i > minmax[0] ){
            minmax[0] = i; //max 
        }
        if(i < minmax[1]){
            minmax[1] = i //min
        }
    }
    return "min of array is " + minmax[1] + " and max of array is "+minmax[0];
}

// Sum of Array
function SumArr(arr){
    sum=0
    for (i of arr){
        sum +=i
    }
    return sum
}
// Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
  }

// Mathematical Functions
// Factorial
function factorial(n) {
    
    if (n === 0 || n === 1) {
      return 1;
    }  
    let result = 1;
    for (var i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
//Prime Number Check
function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
// Fibonacci Sequence
function generateFibonacci(n) {
    var fibonacci = [0, 1];

    for (var i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
  }
  
  