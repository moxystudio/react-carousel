const path = require('path');
const fse = require('fs-extra');

const distPath = path.resolve(__dirname, 'dist');

fse.mkdirp(distPath);
fse.copySync(
    path.resolve(__dirname, 'src', 'styles.css'),
    path.resolve(distPath, 'styles.css'),
);
