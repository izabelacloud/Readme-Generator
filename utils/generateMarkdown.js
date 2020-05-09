//function to generate markdown data
function generateMarkdown(data) {
  return `# ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)


  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [User Story](#userstory)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Installation 

  ${data.installation}

  ## User Story 

  GIVEN a command-line application that accepts user input
  WHEN I am prompted for information about my application repository
  THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
  WHEN I enter my project title
  THEN this is displayed as the title of the README
  WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
  THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
  WHEN I choose a license for my application from a list of options
  THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
  WHEN I enter my GitHub username
  THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
  WHEN I enter my email address
  THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
  WHEN I click on the links in the Table of Contents
  THEN I am taken to the corresponding section of the README

  ## Usage

  ${data.usage}
   
  ## License

  This project is licensed under the ${data.license}.

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}
  The video on how to test this application is included here: ![Walk-through Video](https://drive.google.com/file/d/1ovzKQI11FcP-_ACyx3fUnvfE6kC0bc-9/view)

  ## Questions

  If you have any questions about the repository, contact me directly at ${data.email}. You can find more of my work at https://github.com/${data.github}.

`;
}



//export of the generateMarkdown to the main file
module.exports = generateMarkdown ;

