// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseBadge = licenseList => {
  const renderLicenseBadge = licenseLists.map((license) => { 
    if (license === "ISC") {
      return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)(https://opensource.org/licenses/ISC)`;
    } else if (license === 'MIT') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license === 'Mozilla') {
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    } else if (license === 'Eclipse') {
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    } else {
      return `No License Listed`;
    }
  });
  

  return renderLicenseBadge.join(' ');
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  
  const {
    projectTitle,
    license,
    description,
    installation, 
    usage,
    contribution,
    link,
    questions} = data
  

  return 
  `${projectTitle}

   ## Table of Content 
    [License](#License)
    [Project description](#Description)
    [Installation](Installation)
    [Usage](#Usage)
    [Contribution](#Contribution)
    [Questions](#Questions)
 
   ## License
 
   This project is licensed under the terms of the ${licenseBadge(license)}
 
   ## Description
  
   ${description}
  
   ## Installation
  
   ${installation}
  
   ## Usage
  
   ${usage}
 
   Add a screenshot
  
   ## Contribution
 
   ${contribution}
 
   ## Quesions
 
   GitHub Link ${link}
   For any additional questions please contact me at ${questions}`;

}


module.exports = generateMarkdown;
