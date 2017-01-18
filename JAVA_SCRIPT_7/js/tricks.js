function A() {
    console.log('inside A');
    B();
}

function B() {

    console.log('inside B');
    A();
}


A();
B();
