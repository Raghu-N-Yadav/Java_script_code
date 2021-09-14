//using object and iterating over them
//simple object
let myObject = { };

///adding values to the object
myObject.name = 'Raghu N Yadav';
myObject['Age'] = 27;
myObject['Degree'] = 'CSE';
myObject.life = 'Chill'; //adding one more element
console.log(myObject);

//printing object parameters using key using for loop
for (let variable in myObject){
    console.log(variable, ":", myObject[variable]);
};

// deleting from an object
delete myObject.life;
console.log(myObject);

//using methods inside an object
let myObject1 = {
    add (x,y) {
        return x + y;
    },
    mul (i,j) {
        return i * j;

    }
}
console.log(myObject1.add(1,2));
console.log(myObject1.mul(1,2));

///nested obbjects
let nestedObject = {
    Raghu : {
        age :27,
        work : false
    },
    Rohit : {
        age : 22,
        work : true
    },
    Abhishek : {
        age :40,
        work : true
    }
};

for (let i in nestedObject) {
    console.log( i, ':', nestedObject[i].age, '\n');
    console.log(i,':', nestedObject[i].work );
}