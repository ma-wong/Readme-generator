const fs = require('fs');
const inquirer =  require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description',
    },
    {
        type: 'list',
        message:'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('Data was appended successfully');
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        writeToFile('EXAMPLE.md', generateMarkdown(data));
    });
};

// function call to initialize program
init();