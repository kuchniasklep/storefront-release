import { createProviderConsumer } from '@stencil/state-tunnel';
import { h } from '@stencil/core';
export default createProviderConsumer({}, (subscribe, child) => (h("context-consumer", { subscribe: subscribe, renderer: child })));
