#! /usr/bin/env node


import inquirer from "inquirer";

const answer = await inquirer.prompt([{
    message: "Enter First number",
    type: "number",
    name: "firstNumber"

},
{
    message: "Enter second number",
    type: "number",
    name: "secondNumber"
},
{
    message: "select one of the operstors to perform the opration",
    type: "list",
    name: "oprators",
    choices:["Addition", "Subtraction", "Multiplication", "Division"]
}
]);
// conditional statement
if(answer.oprators === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
    
}
else if(answer.oprators === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}
else if(answer.oprators === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if(answer.oprators === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}
else{
    console.log("please select a valid oprators");
    
}
