const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "What is the title of your project?"
            },
            {
                type: "input",
                name: "description",
                message: "Please write a brief description of the project."
            },
            // {
            //     type: "checkbox",
            //     name: "tableOfContents",
            //     message: "Please check which items you would like contained in the Table of Contents.",
            //     choices: ["Title", "Description", "Installation", "Usage", "License", "Contributing", "Author(s)", "Credit" ]
            // },
            {
                type: "input",
                name: "instal",
                message: "Please describe what the user would need to know to install this project"
            },
            {
                type: "input",
                name: "use",
                message: "Please describe how to use this project. "
            },
            {
                type: "input",
                name: "license",
                message: "Please list any license used in this project."
            },
            {
                type: "input",
                name: "contrib",
                message: "Please describe how a user would contribute to this project."
            },
            {
                type: "input",
                name: "tests",
                message: "Please describe any testing completed."
            },
            {
                type: "input",
                name: "questions",
                message: "Please list questions regarding this project, if any."
            },

        ]);
}

function generateReadMe() {
    return `
    `
}

promptUser ()
    .then(function(answers){
        const readme = generateReadMe(answers);

        return writeFileAsync("README.md", readme);
    })
    .then(function() {
        console.log("Successfully wrote to README.md");
        
    })
    .catch(function(err) {
        throw err;
    })