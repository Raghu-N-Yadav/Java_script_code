//using random number genrator to play with switch
let myNumber = Math.floor(Math.random()* 5); // gives a number b/w 0 and 5

switch (myNumber) {
    case 1:
        console.log(`Number is ${myNumber}`);
        break;
    case 2:
        console.log(`Number is ${myNumber}`);
        break;
    case 3:
        console.log(`The  number is ${myNumber}`);
        break;
    case 4:
        console.log(`This time number is ${myNumber}`);
        break;
    case 5:
        console.log(`This is the number ${myNumber}`);
        break;
    default:
        console.log('I think there is a ZERO');
        break;
}