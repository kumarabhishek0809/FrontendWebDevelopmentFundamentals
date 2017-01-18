function foo() {
    console.log("Foo");
}

var bar = function () {
    console.log("BAR");
    testGlobal = "Global Inside Method";
}


foo();

bar();

console.log(testGlobal);

function cityLocation() {
    var city = "Paris";

    return {
        get: function () {
            console.log(city);
        },
        put: function (newCity) {
            city = newCity;
        }
    };
}

var myLocation = cityLocation();
myLocation.get();
myLocation.put("Tokyo");
myLocation.get();
