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

var over = "I am over 25 years old";
var under = "I am under 25";
var result;
var myCurrentAge = prompt("How old are you?");
if (myCurrentAge >= 25) {
    result = over;
} else {
    result = under;
}
console.log('if result:',result);

result = myCurrentAge >= 25 ? over : under;
 console.log('? result:', result);