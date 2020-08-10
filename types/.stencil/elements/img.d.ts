export declare class Img {
    src: string;
    alt: string;
    target: string;
    sync: boolean;
    vertical: boolean;
    left: boolean;
    right: boolean;
    center: boolean;
    loaded: boolean;
    loadAnimated: boolean;
    root: HTMLElement;
    loadHandler(e: Event): Promise<void>;
    componentDidUpdate(): void;
    srcListener(): void;
    private observer;
    private image;
    componentDidLoad(): void;
    SetAlignment(): void;
    render(): any;
}
