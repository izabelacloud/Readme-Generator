// function to generate markdown for README


// const generateLicenseLink = imageURL => {
//   if ($data.choices === "GNU AGPLv3") {
//     imageURL = "[GNU AGPLv3](https://www.seekpng.com/png/detail/386-3862138_agpl-license-gnu-gpl.png)"
//     console.log(imageURL);
//   }
//   // return`[GitHub license](${imageURL})
//   // `;
// }


// const licenseImageURLs = questions.license.map("[GNU AGPLv3](https://www.seekpng.com/png/detail/386-3862138_agpl-license-gnu-gpl.png)", "[GNU AGPLv3](https://www.seekpng.com/png/detail/386-3862138_agpl-license-gnu-gpl.png)", "[GNU AGPLv3](https://www.seekpng.com/png/detail/386-3862138_agpl-license-gnu-gpl.png)", "[GNU AGPLv3](https://www.seekpng.com/png/detail/386-3862138_agpl-license-gnu-gpl.png)", "[GNU AGPLv3](https://www.seekpng.com/png/detail/386-3862138_agpl-license-gnu-gpl.png)", "[GNU AGPLv3](https://www.seekpng.com/png/detail/386-3862138_agpl-license-gnu-gpl.png)", "[GNU AGPLv3](https://www.seekpng.com/png/detail/386-3862138_agpl-license-gnu-gpl.png)")
// console.log(licenseImageURLs);

// const {license} = questions.choices
// console.log(license);



const generateLicenseLink = () => {

  for (let i; i < questions.choices.length; i++) {
      let selectedLicense = questions.choices[i]; 
      console.log(selectedLicense)
  }

  let imageURL

  if (selectedLicense === "GNU AGPLv3") {
    imageURL = "[GNU AGPLv3](https://www.seekpng.com/png/detail/386-3862138_agpl-license-gnu-gpl.png)"
    console.log(imageURL);
    return`[GitHub license](${imageURL})
  `;
  }

  if (selectedLicense === "GNU GPLv3") {
      imageURL = "[GNU GPLv3](https://img.shields.io/badge/license-GPL-blue)"
      console.log(imageURL);
      return`[GitHub license](${imageURL})
      `;
  }

  if (selectedLicense === "Mozilla Public License 2.0") {
      imageURL = "[Mozilla Public License 2.0](https://cdn.ttgtmedia.com/ITKE/cwblogs/open-source-insider/Mozilla%20PL.png)"
      console.log(imageURL);
      return`[GitHub license](${imageURL})
      `;
      }

  if (selectedLicense === "Apache License 2.0") {
      imageURL = "[Apache License 2.0](https://img.shields.io/badge/license-Apache%202-blue)"
      console.log(imageURL);
      return`[GitHub license](${imageURL})
      `;
  }

  if (selectedLicense === "MIT License") {
      imageURL = "[MIT License](https://img.shields.io/badge/license-MIT-blue.svg)"
      console.log(imageURL);
      return`[GitHub license](${imageURL})
      `;
  }

  if (selectedLicense === "BSD") {
      imageURL = "[BSD](https://upload.wikimedia.org/wikipedia/commons/c/cd/Boost.png)"
      console.log(imageURL);
      return`[GitHub license](${imageURL})
      `;
  }


}


function generateMarkdown(data) {
  // [GitHub license](${generateLicenseLink(imageURL)})

  return `# ${data.title}
  ${imageURL}


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


// generateLicenseLink();

module.exports = generateMarkdown ;
