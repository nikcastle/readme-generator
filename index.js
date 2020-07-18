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
            {
                type: "input",
                name: "install",
                message: "Please provide step-by-step instructions the user would need to take to install this project."
            },
            {
                type: "input",
                name: "use",
                message: "Please provide instructions and/or examples for how to use this project. "
            },
            {
                type: "input",
                name: "credit",
                message: "Please list your collaborators, if any."
            },
            {
                type: "list",
                name: "license",
                message: "Please select an open source license for this project. (Use the arrow keys to move between options and the space bar to select one.)",
                choices: ["MIT License", "GNU General Public License v2", "GNU General Public License v3", "Apache License 2.0", "ISC License"]
            },
            {
                type: "input",
                name: "contrib",
                message: "Please list any guidelines a user would need to know in order to contribute to this project."
            },
            {
                type: "input",
                name: "tests",
                message: "Please describe any testing completed."
            },
            {
                type: "input",
                name: "username",
                message: "What is your github username?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your email address?"
            }

        ]);
}

function generateReadMe(answers) {
    return `
    # ${answers.title}

    ## Description
    ${answers.description}

    ## Table of Contents
    1. [Installation](#installation)
    2. [Usage](#usage)
    3. [Credits](#credits)
    4. [License](#license)
    5. [Contributing](#contributing)
    6. [Tests](#tests)
    7. [Questions](#questions)

    ## Installation
    ${answers.install}

    ## Usage
    ${answers.use}

    ## Credits
    ${answers.credit}

    ## License
    ${answers.license}

    ## Contributing
    ${answers.contrib}

    ## Tests
    ${answers.tests}

    ## Questions?
    Please email with with any questions [@${answers.email}](#${answers.email}) or find me on Github [@${answers.username}](#${answers.username}).
    `
}

//* how can I make the email address and the github username links?
//* how do I put a badge for the relevant license?

promptUser()
    .then(function (answers) {
        const readme = generateReadMe(answers);

        return writeFileAsync("genREADME.md", readme);
    })
    .then(function () {
        console.log("Successfully wrote to genREADME.md"); 

    })
    .catch(function (err) {
        throw err;
    })