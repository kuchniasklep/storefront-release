'use strict';

const index = require('./index-18d28dc7.js');
const stateTunnel = require('./state-tunnel-786a62ce.js');

const Tunnel = stateTunnel.createProviderConsumer({}, (subscribe, child) => (index.h("context-consumer", { subscribe: subscribe, renderer: child })));

exports.Tunnel = Tunnel;
