/* eslint-disable */
const configFilePath = 'src/config.js';

const { src, dest } = require('gulp');
const through2 = require('through2');

require('dotenv').config();

// Initilise with empty config file
const fs = require('fs');
fs.closeSync(fs.openSync(configFilePath, 'w'));

const generateConfigFile = through2.obj((input, _, cb) => {
  if (input.isBuffer()) {
    const code = `export const baseURL = "${process.env.BASE_URL}"`;
    input.contents = Buffer.from(code);
  }

  cb(null, input);
});

const defaultTask = (cb) => {
  src(configFilePath)
    .pipe(generateConfigFile)
    .pipe(
      dest('src/', {
        overwrite: true,
      })
    );

  cb();
};

exports.default = defaultTask;
