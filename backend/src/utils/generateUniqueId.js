const crypto = require('crypto');

module.exports = function requireUniqueId(){
    return crypto.randomBytes(4).toString('HEX');
}