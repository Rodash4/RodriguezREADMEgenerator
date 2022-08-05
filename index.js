// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdownPage = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: "projectTitle",
            message: "What is the project name?",
        },
        {
            type: 'input',
            name: "license",
            choices: ["ISC", "MIT", "Mozilla", "Eclipse"],
        },
        {
            type: 'input',
            name: "description",
            message: "Provide a short description explaining the what, why, and how of your project.",
        },
        {
            type: 'input',
            name: "installation",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        },
        {
            type: 'input',
            name: "usage",
            message: "Provide instructions and examples for useage",
        },
        {
            type: 'input',
            name: "contribution",
            message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so",
        },
        {
            type: 'input',
            name: "link",
            message: "Enter GitHub Link",
        },
        {
            type: 'input',
            name: "questions",
            message: "Enter Email Address",
        },
    ]);
};

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./created/README.md', fileContent, error => {
            if (error) {
                console.log(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Your README has been created!'
            });
        });
    });
};

// // TODO: Create a function to initialize app      

function init() {
    promptUser()
        .then(data => {
            return generateMarkdownPage(data);
        })
        .then(pageMarkdown => {
            return writeFile(pageMarkdown);
        })
        .then(writeFileResponse => {
        })
        .catch(err => {
            console.log(err);
        });
};

                                                
// Function call to initialize app
init();
