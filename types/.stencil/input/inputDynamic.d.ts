export declare class InputDynamic {
    root: HTMLElement;
    api: string;
    message: string;
    ready: Promise<boolean>;
    componentDidLoad(): void;
    Validate(): Promise<void>;
    IsValid(): Promise<boolean>;
    loading: boolean;
    render(): any;
}
