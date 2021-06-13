const fs = require('fs').promises;



module.exports = (filePath, data) => fs.writeFile(filePath, data, { flag: 'w'});

