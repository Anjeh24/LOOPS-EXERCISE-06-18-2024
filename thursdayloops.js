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


