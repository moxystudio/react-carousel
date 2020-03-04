const path = require('path');
const fse = require('fs-extra');

['lib', 'es', 'dist'].forEach((folder) => {
    fse.emptyDirSync(path.resolve(__dirname, folder));
});
