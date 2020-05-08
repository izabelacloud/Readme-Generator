//importing the generate-site.js and the writeFile function
const { writeFile } = require('./utils/generate-site.js');



//inquirer initiation
const inquirer = require("inquirer");
// console.log(inquirer);

const generateReadme = require("./utils/generateMarkdown.js");



// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username (Required)",
        validate: GitHubUsernameInput => {
            if(GitHubUsernameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub Username!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email: (Required)",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log("Please enter your email!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? (Required)",
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log("Please enter your Project name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Enter the description of the Project (Required)",
        validate: projectDescriptionInput => {
            if(projectDescriptionInput) {
                return true;
            } else {
                console.log("Please enter Project Description!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation-instructions",
        message: "Provide installation instructions: (Required)",
        validate: installationInstructionsInput => {
            if (installationInstructionsInput) {
                return true;
            } else {
                console.log("Please enter Installation Instructions!");
                return false;
            }
        } 
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter information about Usage: (Required)",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please enter Usage details!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter Contribution details: (Required)",
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log("Please enter Contribution details!");
            }
        }
    },
    {
        type: "input",
        name: "test-instructions",
        message: "Please enter Test Instructions: (Required)",
        validate: testInstructionsInput => {
            if (testInstructionsInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select from the list of licenses: (Required)",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"],
        validate: licenseSelection => {
            if (licenseSelection) {
                return true;
            } else {
                return false;
            }
        }
    }

];




//function to initialize program
//function to invoke the inquirer with where the questions array is passed in
const promptUser = (userAnswerData) => {
    // If there's is no data no 'projects' array property, create one
	if (!userAnswerData) {
		userAnswerData = [];
	}
    return inquirer.prompt(questions)
    .then(userAnswers => {
        console.log(userAnswers);
        userAnswerData.push(userAnswers);
        console.log(userAnswerData);
        })
}


// function to write README file
function writeToFile(fileName, data) {
}



// function call to initialize program
// init()
// .then()

promptUser()
    .then(userAnswerData => {
    return generateReadme(userAnswerData);
    })
    .then(pageREADME => {
        return writeFile(pageREADME);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse)
    })
    .catch(err => {
        console.log(err);
      });
    

