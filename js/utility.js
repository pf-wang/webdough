// 'use strict';

function hex(x) {
  var hexDigits = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

function rgb2hex(rgb) {
  rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)*/);
  return hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

export {rgb2hex, hex};