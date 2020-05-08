const inquirer = require("inquirer");
// console.log(inquirer);

// array of questions for user
const questions = [

];

const promptUser = () => {
    return inquirer.prompt([
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
            message: "Please enter information about Usage: ",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("Please enter Usage information");
                    return false;
                }
            }
        },
        // {
        //     type: 
        // }


        


    ])
   
    
}
// .then()

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
promptUser();
