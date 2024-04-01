import inquirer from "inquirer";

// this is the random number computer generated
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("welcome to number guessing game");

// // answer object
const answer = await inquirer.prompt([{
    name: "numbergusses",
    type: "number",
    message: "please guess a number between 1-6:",
},
]);

if (answer.numbergusses === randomNumber){
    console.log("congratulations! you guess right number");
} else {
    console.log("try agin! you guess a wrong number");
}

