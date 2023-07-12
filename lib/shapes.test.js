const {Triangle, Circle, Square} = require('./shapes');

describe('triangle', () => {
  it('should render a triangle', () => {
    const color = 'pink';
    const shape = new Triangle();
    shape.setColor(color);
    const dimensions = `<polygon points="0,0 0,200 200,100" fill="${color}"/>`;
    expect(shape.render()).toEqual(dimensions);
  });
});

describe('circle', () => {
  it('should render a circle', () => {
    const color = 'purple';
    const shape = new Circle();
    shape.setColor(color);
    const dimensions = `<circle r="100" fill="${color}"/>`
    expect(shape.render()).toEqual(dimensions);
  });
});

describe('square', () => {
  it('should render a square', () => {
    const color = 'blue';
    const shape = new Square();
    shape.setColor(color);
    const dimensions = `<rect width="200" height="200" rx="50" fill="${color}"/>`
    expect(shape.render()).toEqual(dimensions);
  });
});
