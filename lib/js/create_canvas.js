'use strict';

module.exports = function () {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // in browser
    return document.createElement('canvas');

  } else {
    // in node
    var _req = require; // should not try to browserify `canvas`
    var Canvas = _req('canvas');
    return new Canvas();
  }
};
