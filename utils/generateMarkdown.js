// function to generate markdown for README
function generateMarkdown(data) {
  // # ${data.title}
  return `

  # Title
  # ${data.title}


`;
}

module.exports = generateMarkdown;
