let globalVar = "This is a global variable"


function myVars() {  
   let localVar = "This is a local variable"

   console.log (localVar + ",is only accessable inside a method or " + "a function")

 }

 console.log(globalVar + ",it is accessible everywhere")

myVars();
