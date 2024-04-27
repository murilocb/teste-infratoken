const Rover = require('./rover');

function explorePlateau(plateauSize, roverData) {
  const rovers = [];

  for (const data of roverData) {
    const [x, y, orientation] = data.position.split(' ');
    const rover = new Rover(parseInt(x), parseInt(y), orientation);

    for (const instruction of data.instructions) {
      rover.move(instruction, plateauSize);
    }

    rovers.push(rover);
  }

  return rovers;
}

module.exports = explorePlateau;
