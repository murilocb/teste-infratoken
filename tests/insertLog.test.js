const Log = require('../src/models/logModel');
const insertLog = require('../src/services/insertLog');

jest.mock('../src/models/logModel');

describe('insertLog', () => {
  test('should insert log successfully', async () => {
    Log.prototype.save.mockResolvedValue();

    const direction = 'some_direction';

    await insertLog(direction);

    expect(Log.prototype.save).toHaveBeenCalledTimes(1);
    expect(Log).toHaveBeenCalledWith("some_direction");
  });

  test('should throw error if log insertion fails', async () => {
    Log.prototype.save.mockRejectedValue(new Error('Insertion failed'));

    const direction = 'some_direction';

    await expect(insertLog(direction)).rejects.toThrow('Insertion failed');

    expect(Log.prototype.save).toHaveBeenCalledTimes(2);
    expect(Log).toHaveBeenCalledWith("some_direction");
  });
});
