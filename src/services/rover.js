class Rover {
  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }

  move(instruction, plateau) {
    switch (instruction) {
      case 'L':
        this.turnLeft();
        break;
      case 'R':
        this.turnRight();
        break;
      case 'M':
        this.moveForward(plateau);
        break;
      default:
        console.log('Invalid instruction');
    }
  }

  turnLeft() {
    switch (this.orientation) {
      case 'N':
        this.orientation = 'W';
        break;
      case 'W':
        this.orientation = 'S';
        break;
      case 'S':
        this.orientation = 'E';
        break;
      case 'E':
        this.orientation = 'N';
        break;
    }
  }

  turnRight() {
    switch (this.orientation) {
      case 'N':
        this.orientation = 'E';
        break;
      case 'E':
        this.orientation = 'S';
        break;
      case 'S':
        this.orientation = 'W';
        break;
      case 'W':
        this.orientation = 'N';
        break;
    }
  }

  moveForward(plateau) {
    switch (this.orientation) {
      case 'N':
        if (this.y < plateau[1]) {
          this.y++;
        }
        break;
      case 'E':
        if (this.x < plateau[0]) {
          this.x++;
        }
        break;
      case 'S':
        if (this.y > 0) {
          this.y--;
        }
        break;
      case 'W':
        if (this.x > 0) {
          this.x--;
        }
        break;
    }
  }

  getPosition() {
    return `${this.x} ${this.y} ${this.orientation}`;
  }
}

module.exports = Rover;
