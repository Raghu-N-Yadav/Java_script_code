//using array and performing different opertaion on it
//creating an array
const myArray = [];
 // adding elements to an array
 myArray.push('Raghu', 47, 'Yadav');
 console.log(myArray);

 //adding iteam at beganing of array
 console.log('after pushing two elements at beganing\n');
 myArray.unshift('Hi', 'Dear');
 console.log(myArray);
 
 //checking lenght of an array 
 let ArrayLenght = myArray.length;
 console.log(`Array lenght is ${ArrayLenght}`);
 
 //checking index of 
 console.log('Index of Raghu is ', myArray.indexOf('Raghu'));
 console.log('index of 47 is ',myArray.indexOf(47));

 //using slice to print specific lenght of array
 console.log('slicing an array from index 2  to 4\n');
 console.log(myArray.slice(2,4));
 //console.log(myArray);

 //printing array using for loop 
 console.log('Printing using a for loop\n');
 for (let i = 0; i < ArrayLenght ;i++){
     console.log(myArray[i] );
 }

 //using different style of for loop 
 //directly accessing array elements
 console.log('Different \'for\' loop');
 myArray.forEach(number =>{
     console.log(number);
 })

 // using filter to get a specific array ffrom pre defined array
 myArray1 = ['a','b','c','d','e'];
 myArray2 = [22,45,67,88,100];
 const filteredArray = myArray1.filter(letter =>{
     return letter !== 'a';
 })
 const newArray = myArray2.filter(number => {
     return number % 2 !== 0;
 })
 console.log(newArray); //output 45 , 67
 console.log(filteredArray); //output b.c.d.e

 //deleting elements from an Array
 console.log('Using pop method');
 console.log('poped elements from myArray1 and myArray2 resp.\n', myArray1.pop(),'\n', myArray2.pop()) // output 'e' '100'

 //using shift to pop from start
 console.log('Poping iteams from start using Shift method ');
 console.log(myArray1.shift(), myArray2.shift()); // output 'a' , '22'

 // using splice method to fremove by index value
 myArray3 = ['Raghu',' N', 'Yadav',1,3];
 console.log('before removing elements ',myArray3);
myArray3.splice(0,3); //deleting 3 elements from index zero
 console.log('after removing 3 elements from start using splice',myArray3);

 ////repalcing using splice method
 myArray4 = [1,2,3,4,5,6];
 console.log(myArray4);
 myArray4.splice(3,2, 'wow','Love it');
console.log('after repalcing 2 elements from index value 3',myArray4);