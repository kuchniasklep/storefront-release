'use strict';

const index = require('./index-b1f42468.js');
const index$1 = require('./index-c953c5aa.js');

const Tunnel = index$1.createProviderConsumer({}, (subscribe, child) => (index.h("context-consumer", { subscribe: subscribe, renderer: child })));

exports.Tunnel = Tunnel;
