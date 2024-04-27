const explorePlateau = require('../src/services/explorePlateau');
const Rover = require('../src/services/rover');

describe('explorePlateau', () => {
  test('should explore plateau and return array of rovers with correct final positions', () => {
    const plateauSize = [5, 5];
    const roverData = [
      {
        position: '1 2 N',
        instructions: 'LMLMLMLMM'.split('')
      },
      {
        position: '3 3 E',
        instructions: 'MRRMMRMRRM'.split('')
      }
    ];

    const expectedRovers = [
      new Rover(1, 3, 'N'),
      new Rover(2, 3, 'S')
    ];

    const rovers = explorePlateau(plateauSize, roverData);

    expect(rovers).toHaveLength(2);
    expect(rovers[0].x).toBe(expectedRovers[0].x);
    expect(rovers[0].y).toBe(expectedRovers[0].y);
    expect(rovers[0].orientation).toBe(expectedRovers[0].orientation);
    expect(rovers[1].x).toBe(expectedRovers[1].x);
    expect(rovers[1].y).toBe(expectedRovers[1].y);
    expect(rovers[1].orientation).toBe(expectedRovers[1].orientation);
  });
});
