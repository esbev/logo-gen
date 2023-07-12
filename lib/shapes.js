class Shape {
  constructor() {
    this.color = ""
  }
  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="0,0 0,200 200,100" fill="${this.color}"/>`
  }
}
class Circle extends Shape {
  render() {
    return `<circle r="100" fill="${this.color}"/>`
  }
}
class Square extends Shape {
  render() {
    return `<rect width="200" height="200" rx="50" fill="${this.color}"/>`
  }
}


module.exports = {Triangle, Circle, Square}