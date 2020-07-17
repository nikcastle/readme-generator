const fs = require("fs");
const inquirer = require("inquirer");

function promptUser() {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your name?"
            },
            {
                type: "input",
                name: "location",
                message: "Where are you from?"
            },
            {
                type: "input",
                name: "hobby",
                message: "What is your favorite hobby?"
            },
            {
                type: "input",
                name: "food",
                message: "What is your favorite food?"
            },
            {
                type: "input",
                name: "github",
                message: "Enter your GitHub Username"
            },
            {
                type: "input",
                name: "linkedin",
                message: "Enter your LinkedIn URL."
            }

        ])
}