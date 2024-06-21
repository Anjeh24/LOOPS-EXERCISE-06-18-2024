//1)display largest int amongst two int.

let nums = [2,3];
//let i = nums.length;
if([0] < [1]){
    console.log(nums[1]);
}

//2)conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
//sample numbers: 3, -7, 2

let num1 = 3;
let num2 = -7;
let num3 = 2;
let prod = num1*num2*num3;
console.log(prod);
if((Math.sign(prod)) !== 1){
    //alert("the sign is -");
   console.log("the sign is -");
  
}

//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
//Sample numbers : 0, -1, 4

let num4 = 0;
let num5 = -1;
let num6 = 4;
let arr =[];
let arrNew = arr;

if (arrNew === arr) {
    arr.push(num6, num4, num5);
  // arr = arr.concat(num6, num4, num5);
  console.log(arr);

}

//Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
//Sample numbers : -5, -2, -6, 0, -1
let numArr = [-5, -2, -6, 0, -1];


for (let i = 0; i < numArr.length; i++) {
    if((Math.sign(numArr[i])) !== -1){
        //alert([i]);
        console.log(numArr[i]);
        //break;
    }
}

//5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, 
//it checks if the current number is odd or even, and displays a message on the screen.

for (let i = 0; i < 15; i++) {
    if (i % 2 !== 0) {
        //alert("odd");
        console.log('odd');
    }else{
        //alert("even");
        console.log('even');
    }
    
}

//Write a JavaScript program that computes the average marks of the following students.
// Then, this average is used to determine the corresponding grade.
//for each nested array, i = 0, is student name and i = 1 is student marks

let nameScoreArr = [["David", 80], ["Vinoth", 77], ["Divya", 88], ["Isitha", 95], ["Thomas", 68]];
//let mrk1 = nameScoreArr[0][1];
//console.log[mrk1];

let avgMark = ((nameScoreArr[0][1] + nameScoreArr[1][1] + nameScoreArr[2][1] + nameScoreArr[3][1] + nameScoreArr[4][1]) / nameScoreArr.length);
console.log(avgMark); // = 81.6

if (avgMark < 60) {
    console.log('Grade is F');
} else if(avgMark < 70) {
    console.log('Grade is D');
} else if (avgMark < 80) {
    console.log('grade is C');
}else if (avgMark < 90) {
    console.log('grade is B');
}else if (avgMark < 100) {
    console.log('Grade is A');
}

//7. Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" 
//instead of the number and for multiples of five print "Buzz". 
//For numbers multiples of both three and five print "FizzBuzz".

for (let i = 0; i < 100; i++) {
    if (i % 3 === 0){
    console.log('fizz');
} if (i % 2 === 0){
    console.log('buzz');
} if((i % 3 === 0) && (i % 2 ===0)){
    console.log('fizzbuzz');
}
}

//8. According to Wikipedia a happy number is defined by the following process :
//"Starting with any positive integer, replace the number by the sum of the squares of its digits, 
//and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 
//1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers 
//(or sad numbers)".
//Write a JavaScript program to find and print the first 5 happy numbers.

// let happyNum = 0;  //trying to figure out a solution / how to write a program for this
// if ()




//9. Write a JavaScript program to find the Armstrong numbers of 3 digits.
//Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. 
//For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. 
let a = 0;
let b = 0;
let c = 0;  
let armNum = 0; 
let cubeNum = a**3 + b**3 + c**3;

for (let a = 0; a < 10; a++) {
    for (let b = 0; b < 10; b++) {
        for (let c = 0; c < 10; c++) {
            let prod = (a * 100 + b * 10 + c);     //trying to reason and figure out a solution to get the armstrong numbers
            if(prod === cubeNum) {
                console.log(prod);

            }
        }
    }

}


//10. Write a JavaScript program to construct the following pattern, using a nested for loop.

// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

for (let i = 0; i < 5; i++) {
    if (i === 0){
       console.log("*"); 
    }
    if (i === 1) {
        console.log("**");
    }
    if (i === 2) {
        console.log("***");
    }
    if (i === 3) {
        console.log("****");
    }
    if (i === 4) {
        console.log("*****");
    }

}
