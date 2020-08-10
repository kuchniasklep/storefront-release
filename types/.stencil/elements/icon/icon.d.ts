export declare class Icon {
    root: HTMLElement;
    name: string;
    size: number;
    svg: string;
    attrs: {
        [key: string]: string | number;
    };
    componentWillLoad(): void;
    componentWillUpdate(): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    render(): any;
}
