var score = 67;
var grade;
console.log("Your exam score is " +score);
if (score>=90){
console.log("Your grade is A.");
var score = 67;
var grade;
console.log("Your exam score is " +score);
if (score>=90){
console.log("Your grade is A.");
}
else if(score>=80 && score<=89){
console.log("Your grade is B.");
}
else if(score>=70 && score<=79){
console.log("Your grade is C.");
}
else if(score>=60 && score<=69){
console.log("Your grade is D.");
}
else{
console.log("Your grade is F.");
}

const car = "ferrari";
switch (car) {
case "lamborgini":
console.log("I like lamborgini");
break;
case "ferrari":
console.log("I like ferrari");
break;
default:
console.log("I like all car");
break;
case "tata":
console.log("I like tata");
break;
}
PS G:\html> node --version
v16.17.0
PS G:\html> node fazal39menu.js
I like ferrari
PS G:\html>

var n = 5;
var add = 0;
var factorial = 1;
console.log("The already defined number is " +n);
for(var i=1;i<=n;i++){
factorial*=i;
if(i%2!=0){
add+=factorial;
}
}
console.log("The sum of odd factorial upto " +n ,"is " +add)
var num = 121;
var n= num;
var rev = 0, rem;
while (n>0)
{
    rem = n % 10;
    rev = rev * 10 + rem ;
    n = Math.floor(n/10);
    }
    console.log("The given number is : " +num+ " \nThe reverse of " +num+ " is:
    "+rev);
    if(num==rev)
    {
    console.log(num+' is a palindrome')
    }
    else
    {
    console.log(num+" is not a Palindrome")
    }

    const num = 9;
console.log('The number of terms are : '+num)
let n1 = 0, n2 = 1, nextTerm;
console.log("Fibonacci Series of first " +num+ " terms is:" );
for (let i = 1; i <= num; i++)
{
console.log(n1);
nextTerm = n1 + n2;
n1 = n2;
n2 = nextTerm;
}