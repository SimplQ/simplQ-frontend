/* eslint-disable */
const pumpify = require('pumpify');
const { Readable } = require('stream');
const { createWriteStream } = require('fs');

require('dotenv').config();

const defaultTask = (cb) => {
  const code = `export const baseURL = "${process.env.BASE_URL}"`;
  const stream = Readable.from([code]);
  const output = createWriteStream('src/config.js', {
    flags: 'w',
  });

  pumpify.obj(stream, output);

  cb();
};

exports.default = defaultTask;
