export declare class Alert {
    root: HTMLElement;
    message: string;
    hashCode: number;
    componentWillLoad(): void;
    GenerateHash(str: string): number;
    componentDidLoad(): Promise<void>;
    Close(): void;
    render(): any;
}
