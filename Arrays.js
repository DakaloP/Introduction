
//getting the number of items in an array.//

let courses = ["HTML","CSS","JS","REACT"]
//push method add an element at the end of the array
courses.push("Typesript")

//unshift add element at the beginning of the array
courses.unshift("NodeJS");


let total = courses.length;
console.log (`Number of items in an array is ${total}`);

//to show the elements inside in an array//
console.log (`Elements inside array courses are ${courses}`);

//using variables to convert object to string.//
//we create a list of strings with variable convector//
let convertor = courses.toString();
console.log (`This array becomes a list of strings ${convertor}`);

//conveting using a function that only works in strings//
let caps = convertor.toUpperCase();
let smalls = convertor.toLowerCase();
console.log (`Testing if string can call uppercase ${caps}`);
console.log (`Testing if string can be smaller cases ${smalls}`);

//using join method to separate elements with a "|"
let separator = courses.join (`|`);
console.log (`separate elements ${separator}`)
// it is called a pipe

//2D array//

let student = {

    firstName: "Dineo",
   secondName: "Dakalo",
    stipend:6000
}
console.log (delete student.stipend)
console.log(student);
console.log (student.firstName,student.secondName)









