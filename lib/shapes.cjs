class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
      this.color = color;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="0,0 0,200 200,100" fill="${this.color}" />`
    +`<text x="100" y="120" font-size="60" text-anchor="middle" `
  }
}
class Circle extends Shape {
  render() {
    return `<circle cx="100" cy="100" r="100" fill="${this.color}" />`
      +`<text x="140" y="120" font-size="60" text-anchor="middle" `
  }
}
class Square extends Shape {
  render() {
    return `<rect width="200" height="200" fill="${this.color}" />`
    +`<text x="140" y="180" font-size="60" text-anchor="middle" `
  }
}


module.exports = {Triangle, Circle, Square};