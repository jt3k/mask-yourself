const masks = require('./lib');

module.exports = function mask(
  input,
  { trailingMask = true, pattern = '+7 (___) ___-__-__' }
) {
  let output = '';
  if (trailingMask) {
    output = masks.trailing(input, pattern);
  } else {
    output = masks.normal(input, pattern);
  }
  return output;
};
