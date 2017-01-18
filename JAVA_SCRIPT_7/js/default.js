//Assignment 1
function calculateAreaOfCircle() {
    var radius = document.getElementById("radius").value;
    return Math.PI * radius * radius;


}

function setValueToPForArea() {
    document.getElementById("CircleAreaResult").innerHTML = calculateAreaOfCircle();
}


//Assignment 2
function additionOfNumbers(a, b) {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    console.log(sum);
}

var myVariable = "This is global Variable";

function testMyClosure() {

    var count = 0;
    counter = function () {
        console.log(count + 1);
    }
    calledTest();
}

function calledTest() {
    counter();
    //console.log(myVariable);
}

/*
Create a JavaScript file app.js and include that script file into your index.html file
using <script> tag. In app.js file, write a JavaScript function named counter. Each
time we call this function, we should get a next incremented value starting from 1.
Display the return value in console.
*/

var add = (function () {
    var counter = 0;
    return function () {
        return counter += 1;
    }
})();

/*
Write a JavaScript function named outer function.
Pass an inner function as argument to outer function. Call the inner function within
outer function that should display “Hello World From Inner Function” in console .

*/

function outerFunction(innerFunction) {
    console.log(innerFunction);
}


function innerFunction() {
    return 'Hello World From Inner Function';
}
