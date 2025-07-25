// Anonymous Function. (no name)

setTimeout(function () {
    console.log("This runs after 2 seconds");
  }, 2000);

  addNumbers(function (){
    console.log("")
  },)

  let num1,num2;
  let modulus = function (num1,num2){
    num1=100;
    num2=5;
    let answer = num1%num2
    console.log(answer)
  }
  modulus(num1,num2)