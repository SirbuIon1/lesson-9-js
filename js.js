var x = 9;
console.log(typeof x,x);
var x = "string";
console.log(typeof x,x );
var x = true;
console.log(typeof x,x);
var y;
console.log(typeof y,y);
var y = null;
console.log(typeof y,y);
var y = {x: 76, o:"erww"};
console.log(typeof y,y);


var myCurrentAge = prompt("How old are you?");
if (myCurrentAge >= 25) {
    console.log(myCurrentAge,"I am over 25 years old");
    alert("I am over 25 years old");
} else {
    console.log(myCurrentAge,"I am under 25");
    alert("I am under 25");
}

var age = prompt("Please write your age");
(age >= 25) ?  console.log(age,"I am over 25 years old") : console.log(age,"I am under 25");