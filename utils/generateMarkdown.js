//function to generate markdown data
function generateMarkdown(data) {
  return `# ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)


  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Installation 

  ${data.installation}

  ## Usage

  ${data.usage}
   
  ## License

  This project is licensed under the ${data.license}.

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions

  If you have any questions about the repository, contact me directly at ${data.email}. You can find more of my work at https://github.com/${data.github}.

`;
}



//export of the generateMarkdown to the main file
module.exports = generateMarkdown ;

