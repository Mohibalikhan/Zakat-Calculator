#! /usr/bin/env node
import inquirer from "inquirer";
let mywealth = await inquirer.prompt([{
        name: "money",
        type: "number",
        message: "Enter your Total wealth to check How much Zakat you have to be Paid:"
    }]);
let zakat = 0.025;
console.log(`Your Zakat is:${zakat * mywealth.money}`);
console.log("Thanks for Using Our Services...");
