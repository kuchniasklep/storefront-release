export declare class InputDate implements InputInterface {
    name: string;
    placeholder: string;
    label: string;
    required: boolean;
    root: HTMLElement;
    valid: boolean;
    validMessage: string;
    render(): any;
    IsValid(): Promise<boolean>;
    Validate(): Promise<void>;
    componentDidLoad(): void;
}
