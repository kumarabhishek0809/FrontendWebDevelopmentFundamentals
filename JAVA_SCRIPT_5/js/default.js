function consoleUserDemographics() {
    var myDemographics = {
        name: 'kumar',
        age: '32',
        DOB: '20 - 07 - 1982',
        pob: 'Muzaffarpur'
    };

    console.log(myDemographics);
}


function consoleUserDemographicsAssignment2() {
    var myDemographics = {
        name: 'kumar',
        age: '32',
        dob: '20 - 07 - 1982',
        pob: 'Muzaffarpur'
    };

    console.log(myDemographics[name]);
    console.log(myDemographics[age]);
    console.log(myDemographics[dob]);
    console.log(myDemographics[pob]);
}

/*
Create a JavaScript file app.js and include that script file into your index.html file
using <script> tag. In app.js file Create an object Employee. Store name, age and
salary and address. Address property should again be a nested object which stores
city, state and pincode. Display the value of all properties of Employee object in
console.
*/

function assignment3() {
    var employee = {
        name: 'Kumar Abhishek',
        age: '32',
        salary: 16000
    };

    var address = {
        houseNo: 374,
        sector: '16B',
        subarea: 'dwarka',
        district: 'Delhi'
    };

    employee['address'] = address;
    console.log(employee);
}


/*
Create a JavaScript file app.js and include that script file into your index.html file
using <script> tag. In app.js file, Create an Employee array. Store 5 different
employee objects < created in assignment 3 > within Employee array. Print name,
age, salary, city, state and pincode of any one employees inside the array in console.

*/

function assignment4() {

    var employees = [
        {
            name: 'Kumar Abhishek',
            age: '32',
            salary: 16000,
            address: {
                state: 'Delhi',
                city: 'Delhi',
                pincode: '110075'
            }
        },
        {
            name: 'Harsh Vardhan',
            age: '28',
            salary: 16000,
            address: {
                state: 'AP',
                city: 'Hyderabad',
                pincode: '550075'
            }
        },
        {
            name: 'Prabhu',
            age: '29',
            salary: 16000,
            address: {
                state: 'Karnataka',
                city: 'Banglore',
                pincode: '900075'
            }
        },
        {
            name: 'Kumar Rohshan',
            age: '32',
            salary: 16000,
            address: {
                state: 'TamilNadu',
                city: 'Cheenai',
                pincode: '800909'
            }
        },
        {
            name: 'Rashmi',
            age: '32',
            salary: 16000,
            address: {
                state: 'Punjab',
                city: 'Chandigadh',
                pincode: '230075'
            }
        }
    ];


    for (var emp in employees) {
        console.log(emp);
        //name,age, salary, city, state and pincode
        //Not working console.log("Name :" + emp.name + " Age : " + emp.age + " Salary" + emp.salary + " City :" +
        //emp.address[city] + " State :" + emp.address.state + "Pincode :" + emp.address.pincode);
    }

    for (var i = 0; i < employees.length; i++) {
        var emp = employees[i];
        console.log("Name :" + emp.name + " Age : " + emp.age + " Salary" + emp.salary + " City :" +
            emp.address.city + " State :" + emp.address.state + "Pincode :" + emp.address.pincode);
    }

}
