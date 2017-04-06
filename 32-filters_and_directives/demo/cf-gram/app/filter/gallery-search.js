'use strict';

module.exports = function() {
  return function(galleries, searchTerm) {
    let fuzzyRegex = generateFuzzyRegex(searchTerm);

    return galleries.filter(gallery => {
      return fuzzyRegex.test(gallery.name.toUpperCase());
    });
  };
};

function generateFuzzyRegex(input) {
  if (!input) return /.*/;
  let fuzzyString = '.*' + input.toUpperCase().split('').join('.*') + '.*';
  return new RegExp(fuzzyString);
};
