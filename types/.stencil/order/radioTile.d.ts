export declare class RadioTile {
    root: HTMLElement;
    name: string;
    value: string;
    color: string;
    logo: string;
    price: string;
    service: string;
    time: string;
    active: boolean;
    CheckHandler(): void;
    componentDidLoad(): void;
    mobile: boolean;
    resizeHandler(): void;
    MobileWatcher(mobile: boolean): void;
    render(): any;
}
