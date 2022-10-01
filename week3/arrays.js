const numberArray = [10, 20, 30,50];

const length = numberArray.push(40);

console.log(length,numberArray);

const last = numberArray.pop();

console.log(last); 
console.log(numberArray.length);


var scores = [10, 20, 30, 10, 40, 20];
console.log(scores.indexOf(10)); 
console.log(scores.indexOf(30));  
console.log(scores.indexOf(50));  
console.log(scores.indexOf(20));  


let letters = ['c','a','b','y' ];
letters.sort();
console.log(letters);


var colors = ['red','green','blue','yellow','purple'];
var subset = colors.slice(0,4);
console.log(subset); 