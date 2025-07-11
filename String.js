let petName = 'Rocky'; // Global variable

myFunction();

function myFunction() {
    let fruit = 'apple'; // Use let/const to avoid polluting global scope
    console.log(typeof petName + ' - ' + 'My pet name is ' + petName);
    console.log('Fruit name is ' + fruit);
}

myFunction(); 

anotherFunc();

function myFunction() {
    let petName = "Sizzer"; // local variable (new function scope)
    console.log(petName);
}

function anotherFunc() {
    let petName = "Jill"; // local variable
    console.log(petName);
}