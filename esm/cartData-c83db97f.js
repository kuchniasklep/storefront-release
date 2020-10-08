import { h } from './index-22b73bd9.js';
import { c as createProviderConsumer } from './state-tunnel-04c0b67a.js';

const Tunnel = createProviderConsumer({}, (subscribe, child) => (h("context-consumer", { subscribe: subscribe, renderer: child })));

export { Tunnel as T };
