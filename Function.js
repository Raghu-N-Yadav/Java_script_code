//using function to do some mathmatical operations
//simple function
function simpleFunction(){
    console.log('It\'s a simple function');
}

function calculator(x, y){
    const value = Math.floor(Math.random()*3) // give random integers b/w 0 and 5
    console.log(`Input is ${x} & ${y}`);
    switch (value){
        case 0:
            console.log(`Adding numbers ${x} & ${y} gives`, x + y );
            break;
        case 1:
            if (x > y){
                console.log(`On subtracting ${y} from ${x}`, x - y);
                break;
            }else if (y > x){
                console.log(`on subtracting ${x} from ${y}`, y - x);
            }
        case 2 :
            console.log(`Multiplying ${x} & ${y} `, x * y);
            break;
        default:
            console.log(`can\'t do anything with your given numbers`);
            break;

    }
}

calculator(5,6);
calculator(9,8);