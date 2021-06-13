const fs = require('fs').promises;

module.exports = (filePath, enc='utf-8') => fs.readFile(filePath, enc);
