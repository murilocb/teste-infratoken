const Rover = require('../src/services/rover');

describe('Rover', () => {
  test('should correctly initialize rover position and orientation', () => {
    const rover = new Rover(3, 4, 'N');
    expect(rover.x).toBe(3);
    expect(rover.y).toBe(4);
    expect(rover.orientation).toBe('N');
  });

  test('should correctly turn left', () => {
    const rover = new Rover(0, 0, 'N');
    rover.turnLeft();
    expect(rover.orientation).toBe('W');
  });

  test('should correctly turn right', () => {
    const rover = new Rover(0, 0, 'N');
    rover.turnRight();
    expect(rover.orientation).toBe('E');
  });

  test('should move forward correctly', () => {
    const plateau = { maxX: 5, maxY: 5 };
    const rover = new Rover(1, 2, 'N');
    rover.moveForward(plateau);
    expect(rover.x).toBe(1);
    expect(rover.y).toBe(2);
  });

  test('should get correct position string', () => {
    const rover = new Rover(2, 3, 'S');
    const position = rover.getPosition();
    expect(position).toBe('2 3 S');
  });

  test('should move correctly according to instructions', () => {
    const plateau = { maxX: 5, maxY: 5 };
    const rover = new Rover(1, 2, 'N');
    rover.move('L', plateau);
    rover.move('M', plateau);
    rover.move('L', plateau);
    rover.move('M', plateau);
    rover.move('L', plateau);
    rover.move('M', plateau);
    rover.move('L', plateau);
    rover.move('M', plateau);
    rover.move('M', plateau);
    const position = rover.getPosition();
    expect(position).toBe('0 1 N');
  });
});
