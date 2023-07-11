import inquirer from "inquirer";
import fs from "fs";
let questions = [
  {
    name: "initials",
    message: "Enter upto 3 characters."
  },
  {
    name: "textColor",
    message: "Type a color for your initials."
  },
  {
    type: "list",
    name: "shape",
    choices: ["Triangle", "Circle", "Square"],
    message: "Choose your shape.",
  },
  {
    name: "shapeColor",
    message: "Type a color for your shape."
  },
];

async function createLogo() {
  await inquirer
    .prompt(questions)
    .then((input) => {
      let logoFile = buildLogo(input);
      writeLogoFile(input.title, logoFile);
    })
    .catch((err) => {
      console.log(err);
    });
}

async function writeLogoFile(title, logoFile) {
  const svgFile = `logo.svg`;

  fs.writeFile(svgFile, logoFile, (err) => {
    err ? console.log(err) : console.log('Your logo has been created');
  });
}

function buildLogo(input) {
  return ``
}