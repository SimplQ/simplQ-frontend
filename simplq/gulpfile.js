/* eslint-disable */

const { src, dest } = require('gulp');
const through2 = require('through2');

require('dotenv').config();

const generateConfigFile = through2.obj((input, _, cb) => {
  if (input.isBuffer()) {
    const code = `export const baseURL = "${process.env.BASE_URL}"`;
    input.contents = Buffer.from(code);
  }

  cb(null, input);
});

const defaultTask = (cb) => {
  src('src/config.js')
    .pipe(generateConfigFile)
    .pipe(
      dest('src/', {
        overwrite: true,
      })
    );

  cb();
};

exports.default = defaultTask;
