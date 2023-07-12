import inquirer from 'inquirer';
import fs from 'fs';
const {Triangle, Circle, Square} = require('./lib/shapes');

let questions = [
  {
    name: "initials",
    message: "Enter up to 3 characters."
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
      if (input.shape === "Triangle") {
        let shape = new Triangle;
      };
      if (input.shape === "Circle") {
        let shape = new Circle;
      };
      if (input.shape === "Square") {
        let shape = new Square;
      };
      let logoFile = buildLogo(input);
      writeLogoFile(logoFile);
    })
    .catch((err) => {
      console.log(err);
    });
}

async function writeLogoFile(logoFile) {
  const svgFile = `logo.svg`;

  fs.writeFile(svgFile, logoFile, (err) => {
    err ? console.log(err) : console.log('Your logo has been created');
  });
}

function buildLogo(input) {
  return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1">`
  +`${shape}`
  +`<text x="150" y="150" font-size="60" text-anchor="middle" fill="${input.textColor}">${input.initials}</text>`
  +`</svg>`
}