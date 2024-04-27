const explorePlateau = require('./services/explorePlateau');
const insertLog = require('./services/insertLog');
const { connect } = require('./database');

const start = async () => {
  await connect()

  const plateauSize = [5, 5];
  const roverData = [
    {
      position: '1 2 N',
      instructions: 'LMLMLMLMM'.split('')
    },
    {
      position: '3 3 E',
      instructions: 'MRRMMRMRRM'.split('')
    },
  ];

  const rovers = explorePlateau(plateauSize, roverData);

  for (const rover of rovers) {
    await insertLog({ direction: rover.getPosition() });
    console.log(`Final Position: ${rover.getPosition()}`);
  }

  console.log('Shutting down...');
  process.exit(0);
};

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', error => {
  console.error('Uncaught Exception:', error);
});

start();
