import inquirer from 'inquirer';
import fs from 'fs';
import {Triangle, Circle, Square} from './lib/shapes.cjs';

let shape;
let questions = [
  {
    name: "initials",
    message: "Enter up to 3 characters.",
    maxLength: 3
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
      switch (input.shape) {
        case "Triangle":
          shape = new Triangle;
          break;
        case "Circle":
          shape = new Circle;
          break;
        case "Square":
          shape = new Square;
          break;
        default:
          shape = new Triangle;
          break;
      }

      // if (input.shape === "Triangle") {
      //   shape = new Triangle;
      // };
      // if (input.shape === "Circle") {
      //   shape = new Circle;
      // };
      // if (input.shape === "Square") {
      //   shape = new Square;
      // };
      shape.setColor(input.shapeColor);
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
  +`${shape.render()}`
  +`fill="${input.textColor}">${input.initials}</text>`
  +`</svg>`
}

createLogo();