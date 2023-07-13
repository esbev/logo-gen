const {Triangle, Circle, Square} = require('./shapes.cjs');

describe('triangle', () => {
  it('should render a triangle', () => {
    const color = 'pink';
    const shape = new Triangle();
    shape.setColor(color);
    const dimensions = `<polygon points="0,0 0,200 200,100" fill="${color}" /><text x="100" y="120" font-size="60" text-anchor="middle" `;
    expect(shape.render()).toEqual(dimensions);
  });
});

describe('circle', () => {
  it('should render a circle', () => {
    const color = 'purple';
    const shape = new Circle();
    shape.setColor(color);
    const dimensions = `<circle cx="100" cy="100" r="100" fill="${color}" /><text x="140" y="120" font-size="60" text-anchor="middle" `
    expect(shape.render()).toEqual(dimensions);
  });
});

describe('square', () => {
  it('should render a square', () => {
    const color = 'blue';
    const shape = new Square();
    shape.setColor(color);
    const dimensions = `<rect width="200" height="200" fill="${color}" /><text x="140" y="180" font-size="60" text-anchor="middle" `
    expect(shape.render()).toEqual(dimensions);
  });
});
