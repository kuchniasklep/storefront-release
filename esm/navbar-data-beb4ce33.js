import { h } from './index-20a680bb.js';
import { c as createProviderConsumer } from './index-2db7bf78.js';

const Tunnel = createProviderConsumer({}, (subscribe, child) => (h("context-consumer", { subscribe: subscribe, renderer: child })));

export { Tunnel as T };
