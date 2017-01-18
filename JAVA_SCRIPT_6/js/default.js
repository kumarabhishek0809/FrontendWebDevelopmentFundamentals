/*
Create a JavaScript file app.js and include that script file into your index.html file
using <script> tag. In app.js file, write a JavaScript program that stores 5 different
Employee objects in an array. Using for in loop display the name, age, salary, city,
state and pin code for all employees in console.
*/

function assignment4() {

    var employees = new Array(5)

    employees[0] = {
        name: 'Kumar Abhishek',
        age: '32',
        salary: 16000,
        address: {
            state: 'Delhi',
            city: 'Delhi',
            pincode: '110075'
        }
    };
    employees[1] = {
        name: 'Harsh Vardhan',
        age: '28',
        salary: 16000,
        address: {
            state: 'AP',
            city: 'Hyderabad',
            pincode: '550075'
        }
    };
    employees[2] = {
        name: 'Prabhu',
        age: '29',
        salary: 16000,
        address: {
            state: 'Karnataka',
            city: 'Banglore',
            pincode: '900075'
        }
    };
    employees[3] = {
        name: 'Kumar Rohshan',
        age: '32',
        salary: 16000,
        address: {
            state: 'TamilNadu',
            city: 'Cheenai',
            pincode: '800909'
        }
    };
    employees[4] = {
        name: 'Rashmi',
        age: '32',
        salary: 16000,
        address: {
            state: 'Punjab',
            city: 'Chandigadh',
            pincode: '230075'
        }
    };


    //display
    for (var i = 0; i < employees.length; i++) {
        var emp = employees[i];
        console.log("Name :" + emp.name + " Age : " + emp.age + " Salary" + emp.salary + " City :" +
            emp.address.city + " State :" + emp.address.state + "Pincode :" + emp.address.pincode);
    }

}

/*
Create a JavaScript file app.js and include that script file into your index.html file
using <script> tag. In app.js file, Write a JavaScript program to display the sum upto
1000 using for and while loop and display the output in console .
*/

function calculateSumUsingWhile() {
    var maxNumber = 1000;
    var sum = 0;
    var i = 0;
    while (i <= maxNumber) {
        sum = sum + i;
        i++;

    }

    console.log(sum)
}


function calculateSumUsingFor() {
    var maxNumber = 1000;
    var sum = 0;
    for (var i = 0; i <= maxNumber; i++) {
        sum = sum + i;
    }
    console.log(sum)
}


function calculateAreaOfCircle() {
    var radius = document.getElementById("radius").value;
    console.log(Math.PI * radius * radius);
}


/*
Create a JavaScript file app.js and include that script file into your index.html file
using <script> tag. In app.js file, write a JavaScript program to find the greatest
among 3 numbers and display the greatest number in console
*/

function maxNum(num1, num2, num3) {
    var max = 0;
    if ((num1 >= num2) && (num1 >= num3)) {
        max = num1;
    } else if ((num2 >= num1) && (num2 >= num3)) {
        max = num2;
    } else {
        max = num3;
    }
    return max;
}

function findMaximumNumber() {
    var arr = [];
    for (i = 0; i < 3; i++) {
        arr[i] = parseInt(prompt("Enter a number"));
    }
    console.log(maxNum.apply(this, arr));
}
