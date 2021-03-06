'use strict';

function deferredpromise() {
  let deferred = {
    promise: null,
    resolve: null,
    reject: null
  };
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
}
var window_load = deferredpromise();
if (document.readyState === 'complete') {
  window_load.resolve();
}
else
  addEventListener('load', () => {
    window_load.resolve();
  });

exports.window_load = window_load;
