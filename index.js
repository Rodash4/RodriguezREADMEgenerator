// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
cont generateREADME = ({answers}) =>

 "# ${projectTitle}

 ## Table of Content 
 - [License](#License)
 - [Project description](#Description)
 - [Installation](Installation)
 - [Usage](#Usage)
 - [Contribution](#Contribution)
 - [Questions](#Questions)

 ## License

 This project is licensed under the terms of the ${license}

 ## Description
 
 ${description}
 
 ## Installation
 
 ${installation}
 
 ## Usage
 
 ${usage}

 To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
 
     ```md
     ![alt text](assets/images/screenshot.png)
     ```
 
 ## Contribution

 ${contribution}

 ## Quesions

 GitHub Link ${link}
 For any additional questions please contact me at ${questions}";



// TODO: Create a function to initialize app
// function init() {}
const init = () => {
    promptUser()
      // Use writeFileSync method to use promises instead of a callback function
      .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
      .then(() => console.log('Successfully created README.md'))
      .catch((err) => console.error(err));
  };
  

// Function call to initialize app
init();
