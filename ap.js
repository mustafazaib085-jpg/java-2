//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var user= Number(prompt('give a number','10'))
user++

user++
user--
user--
document.writeln(`result  <br> the answer is ${user} <br>`)
document.writeln(`the value of a++ is  ${user++} , now the value is ${user} <br>  `)
document.writeln(`the value of a++ is  ${user++}  , now the value is ${user} <br>`)
document.writeln(`the value of a-- is  ${user--}  , now the value is ${user} <br> `)
document.writeln(`the value of a-- is  ${user--}  , now the value is ${user} <br> `)
//2. What will be the output in variables a, b & result after execution of the following script:
//var a = 2, b = 1;
//var result = --a - --b + ++b + b--;
var a = 2, b = 1;
// Step 1: --a
var A = --a;  // pre-decrement a: 2 → 1
// Step 2: --a - --b
var A1 = A - --b;  // pre-decrement b: 1 → 0
// Step 3: --a - --b + ++b
var B = A1 + ++b;  // pre-increment b: 0 → 1 B   
// Step 4: --a - --b + ++b + b--
var B1 = B + b--;  // post-decrement b: value used = 1, b becomes 0
// Final values
document.writeln(`Final Values:<br> a = ${a} <br> b = ${b} <br> result = ${B1} <br>`);
//3. Write a program that takes input a name from user & greet the user.
var name = prompt ( ' write your name ' , "bilal")
document.writeln(`your name is ${name} you are weclome to to the  website`)
//5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5
//should be displayed by default.
var table = prompt("Enter a number to display its multiplication table" ,' 5')
var num = Number(table);
document.writeln("Multiplication table of " + num + ":<br><br>");

for (var i = 1; i <= 12; i++) {
    document.writeln(num + " x " + i + " = " + (num * i) + "<br>");
}
//6. Take 
//a) Take three subjects name from user and store them in 3 different variables.
//b) Total marks for each subject is 100, store it in another variable.
//c) Take obtained marks for first subject from user and stored it in different variable
//d) Take obtained marks for remaining 2 subjects from user and store them in variables.
//e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
var subject = prompt ( " give  frist  subject name" , " urdu")
var subject1 =  prompt("give second  subject name   ", "sci")
var subject2 = prompt ( " give third subject name " , " computer")

var totalMarks = 100;

var obtained = Number(prompt ( " how number you obtained in frist subject" , " 45") )
var obtained1 = Number( prompt ( " how number you obtained in second subject ", " 80") )
var obtained2 =  Number ( prompt ( " how number you obtained in third subject ", " 70") )

var result = (obtained/totalMarks)*100
var result1 =  (obtained1/totalMarks)*100 
var result2= (obtained2/totalMarks)*100

document.writeln( "subject  total marks obtained taotal percentage <br>")
document.writeln(`${subject} &nbsp;&nbsp;&nbsp; ${totalMarks} &nbsp;&nbsp;&nbsp; ${obtained} &nbsp;&nbsp;&nbsp; ${result}%<br>`);
document.writeln(`${subject1} &nbsp;&nbsp;&nbsp; ${totalMarks} &nbsp;&nbsp;&nbsp; ${obtained1} &nbsp;&nbsp;&nbsp; ${result1}%<br>`);
document.writeln(`${subject2} &nbsp;&nbsp;&nbsp; ${totalMarks} &nbsp;&nbsp;&nbsp; ${obtained2} &nbsp;&nbsp;&nbsp; ${result2}%<br>`);







