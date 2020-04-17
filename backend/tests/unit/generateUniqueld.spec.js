const generateUniqueld = require('../../src/utils/generateUniqueld')

describe('Generate Unique ID', () => {
    it('Should generate an unique ID', () => {
        const id = generateUniqueld();

        expect(id).toHaveLength(8);
    });
});