// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
            message: "Provide instructions and examples for use",
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
// function writeToFile(fileName, data) {}

const init = () => {
    promptUser()
      // Use writeFileSync method to use promises instead of a callback function
      .then((answers) => fs.writeFileSync('./created/README.md', generateMarkdone(generateREADME(data))))
      .then(() => console.log('Successfully created README'))
      .catch((err) => console.error(err));
  };
  


// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, err => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log('Your README has been created')
//     });
// };



// // TODO: Create a function to initialize app                                                   


// // function init() {}

// function init() {
//     inquirer.prompt(data)
//     .then(data => {
//         const readmeData = generateMarkdown(data);
//         writeToFile('./created/README.md', readmeData);
//     });
// };


// Function call to initialize app
init();
