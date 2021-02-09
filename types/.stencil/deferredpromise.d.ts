export declare type deferredpromisetype = {
  promise: Promise<void>;
  resolve: () => void;
  reject: () => void;
};
export default function deferredpromise(): deferredpromisetype;
export declare var window_load: deferredpromisetype;
