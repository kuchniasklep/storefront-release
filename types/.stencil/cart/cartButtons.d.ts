export declare class CartButtons {
    root: HTMLElement;
    href: string;
    loading: number;
    loadingDelayed: boolean;
    loadingTimeout: number;
    LoadingWatcher(): void;
    componentDidLoad(): void;
    clickHandler(): Promise<void>;
    render(): any;
}
