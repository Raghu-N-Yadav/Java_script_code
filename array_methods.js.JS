//foreach ,, filter, map, function assinged to a variable 

let myArray = [1,2,3,4,5,6]
console.log('Array lenght is :',myArray.length); //outpiut 6
console.log('Array is  :', myArray);
myArray.forEach(number => {
    let i =3;
    console.log(number + i);//output 4,5,6,7,8,9
    //i +=1; no use of it
})

const filteredArray = myArray.filter(number =>{
    return number -3 !== 0;
})
console.log(filteredArray); //output 1,2,4,5,6

function addition(x,y){
    return x + y;
}
add = addition; // assingning function to a variable
console.log(addition(9,0));//output 9
console.log(add(3,2));//output 5

///using .map method 
 const letter = ['a', 'b', 'c', 'd'];
 const newLetter = letter.map(member => {
     return member +' Hello';
 })

 console.log(newLetter); //output a hello, b hello and so on

 const numbers = [4,5,44,33];
 const newNumbers = numbers.map(members => {
     return members + 10;
 })

 console.log(newNumbers);//output 14,15,54,43