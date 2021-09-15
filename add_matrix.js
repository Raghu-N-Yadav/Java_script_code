//adding two matrix using an array

const matrix1 = [[1,2],[3,4,5],[5,6]];
const matrix2 = [[1,1],[2,2,6],[3,3]];


//defining a function to add them 
 function addMatrix(m1, m2) {
     //console.log("++",m1.length)
     //console.log("**", m1.length())
     //var matrix3 = [];

     // intializing a 2d matrix befor assigning values to it **important concept
     var matrix3 = new Array(3); //number of rows 3

    for (var i = 0; i < matrix3.length; i++) {
        matrix3[i] = new Array(2);} //creating colums 2

    for(var i = 0; i < m1.length ; i++){
        for(var j = 0; j < m1[i].length; j++){
            matrix3[i][j] = m1[i][j] +m2[i][j]; // adding elements
            //console.log(matrix3);
            //console.log(i,j);
         }
     }
     return matrix3; //return addition
 };

 console.log(addMatrix(matrix1,matrix2));