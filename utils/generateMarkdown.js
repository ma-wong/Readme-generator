// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Description
${data.description}

## Table of Contents
* Installation
* Usage
* License
* Contributing 
* Tests
* Questions 

## Installation
To install necessary dependencies, run the following command:
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under ${data.license}

## Contributing
${data.contributing}

## Tests
To run tests, run the following command:
${data.tests}

_______________________________________________________________________________________________________________________________________________________________________
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
