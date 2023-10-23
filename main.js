const myFunction = function (parameter) {}
const mySecondFunction = function (parameter) {}
const function1 = function (parameter) {}
const functionName = function (paramOne, paramTwo) {}

//-----------------------------------------------------------

const sayHello = function () {
return "Hello" 
 };
  
  // an example of the output value when executing the function
  sayHello(); // => "Hello"

//-----------------------------------------------------------


  const myAge = function (age) {
    return age ;
  };
  
  // an example of the output value when executing the function
  myAge(20); // => 20
  myAge(30); // => 30

  //-----------------------------------------------------------

  const incrementOne = function (number) {
return number+1

  };
  
  // an example of the output value when executing the function
  // add one to the the number that was passed in
  incrementOne(20); // => 21
  incrementOne(34); // => 35


    //-----------------------------------------------------------


    const greet = function (name) {
        return "Hello"+name;
      };
      
      // an example of the output value when executing the function
      greet("John"); // => "Hello John"
      greet("Mark"); // => "Hello Mark"


      //-----------------------------------------------------------

      const double = function (number) {
        return number*2
      };
      
      double(2); // => 4
      double(5); // => 10
      double(10); // => 20

//-----------------------------------------------------------

const fullName = function (firstName, lastName) {
return firstName + lastName 
 };
  
  fullName("John", "Doe"); // => "John Doe"
  fullName("Mark", "Smith"); // => "Mark Smith"
//-----------------------------------------------------------

const average = function (a, b) {
return (a+b)/2
  };
  
  average(20, 25); // => 22.5
  average(15, 7); // => 11


  //-----------------------------------------------------------

  const square = function (number) {
    return number * number;
  };
  
  const cube = function (number) {
    return number * number * number;
  };
  
  // guess the following before trying it in the console
  cube(25) + 20; // => 15645
  square(5) + cube(2); // => 33
  square(10 / 5) + cube(2 + 1); // => 31
  average(square(average(6, 2)), cube(4)); // => 40


    //-----------------------------------------------------------
    const totalBill = function (total, taxPercentage, tip) {
return total+taxPercentage*total+tip
      };
      
    totalBill(40, 0.16, 2); // => 48.4
      totalBill(10, 0.16, 0); // => 11.6

    //-----------------------------------------------------------


      const ageInHours = function (ageInYears) {
        return ageInYears*8760 ;
      };
      
      ageInHours(10); // => 87600
      ageInHours(19);// => 166440
//-----------------------------------------------------------

      const calculateProfit = function (unitsSold, unitCost, unitPrice) {
return (unitPrice-unitCost) *unitsSold      };
      
      calculateProfit(1, 3, 5); // => 2
      calculateProfit(4, 2, 5); // => 12
      calculateProfit(10, 5, 15); // => 100
//-----------------------------------------------------------


      const floor = function (number) {
return Math.floor(number) 
      };
      
      // the rounding is to the smallest number
      floor(5); // => 5
      floor(2.4); // => 2
      floor(0.2); // => 0
      floor(1.7); // => 1

      //-----------------------------------------------------------

      const toThePowerOf = function (base, exponent) {
return Math.pow(base,exponent);     
 };
      
      toThePowerOf(2, 2); // => 4
      toThePowerOf(2, 3); // => 8
      toThePowerOf(4, 2); // => 16

//-----------------------------------------------------------

const upperCase = function (string) {
    return string.toUpperCase(); 
  };
  
  upperCase("john"); // => "JOHN"
  upperCase("cat"); // => "CAT"
  upperCase("DOG"); // => "DOG"
//-----------------------------------------------------------

  const randomNumber = function () {
return Math.random();  };
  
  randomNumber(); // => 0.5052417714491793
  randomNumber(); // => 0.32678224417562673
  randomNumber(); // => 0.43265697184952523
//-----------------------------------------------------------

  const oneOrZero = function () {
    return Math.floor(Math.random() * 2);
};
  
  oneOrZero(); // => 1
  oneOrZero(); // => 1
  oneOrZero(); // => 0

//-----------------------------------------------------------

const randomRange = function (number) {
    return Math.floor(Math.random() * number+1); 
  };
  
  // 10 and 0 are included
  randomRange(10); // => 10
  randomRange(10); // => 7
  randomRange(10); // => 1
  randomRange(10); // => 0

//-----------------------------------------------------------
  const fromTo = function (start, end) {
    return Math.floor(Math.random() * (end-start)+start); ; ;
  };
  
  // start is included but end is excluded
  fromTo(10, 20); // => 19
  fromTo(10, 20); // => 17
  fromTo(10, 20); // => 11
  fromTo(10, 20); // => 10

//-----------------------------------------------------------

  const randomCharacter = function (string) {
    charactersLength=string.length;
console.log(string.charAt(Math.floor(Math.random() * charactersLength)));
};
  
  randomCharacter("John"); // => "h"
  randomCharacter("John"); // => "J"
  randomCharacter("John"); // => "o"
  randomCharacter("Cat"); // => "t"
  randomCharacter("Cat"); // => "a"
  randomCharacter("Cat"); // => "a"