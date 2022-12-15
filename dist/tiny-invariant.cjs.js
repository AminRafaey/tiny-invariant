'use strict';

var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  throw new Error(prefix + "- " + (message || ''));
}

module.exports = invariant;
