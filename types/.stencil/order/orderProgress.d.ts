export declare class OrderProgress {
    current: number;
    root: HTMLElement;
    componentDidLoad(): void;
    mobile: boolean;
    resizeHandler(): void;
    componentWillLoad(): void;
    StepStyle(step: number): {
        [key: string]: string;
    };
    render(): any[];
}
