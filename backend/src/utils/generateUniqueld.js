const crypto = require('crypto');

module.exports = function generateUniqueld() {
    return crypto.randomBytes(4).toString('HEX');
}