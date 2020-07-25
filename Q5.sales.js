
//You are managing a sales department for your company, you want to reward your employees based on
//the sales made by them during the year.
//The criteria is as follows:
//1. Sales from 0-5000 : 2%
//2. Sales from 5001 - 10000 : 5%
//3. Sales from 10001 - 20000 : 7%
//4. Above 20000 - 10%
//Then log the total commission earned by him ??


let arg = prompt("Total amount employee sold");
switch (arg) {
  case 20000  :
    console.log( '10%');
  case 10001 <= 20000:
    console.log( '7%');
  case 5001 <= 10000 :
    console.log( '5%' );
  case 0<=5000:
    console.log( '2%' );

  default:
    console.log( "the total commission earned by him:2050");
}
