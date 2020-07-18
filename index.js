const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer
        .prompt([{
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
                type: "list",
                name: "license",
                message: "Please select a license for this project.",
                choices: ["", "", "", "", ""]
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
    //* can the code in here look just like an html would look but with markdown language instead of html tags?
    # Project Title

    ## Description

    ## Table of Contents
    1. Installation
    2. Usage
    3. Credits
    4. License
    5. Contributing
    6. Tests

    ## Installation

    ## Usage

    ## Credits

    ## License

    ## Contributing

    ## Tests
    `
}

promptUser()
    .then(function (answers) {
        const readme = generateReadMe(answers);

        return writeFileAsync("genREADME.md", readme);
    })
    .then(function () {
        console.log("Successfully wrote to README.md"); //* can the file be called README.md when I already have one in the repo? How do I test it?

    })
    .catch(function (err) {
        throw err;
    })