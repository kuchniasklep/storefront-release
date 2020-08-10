export declare class InputText implements InputInterface {
    name: string;
    placeholder: string;
    label: string;
    value: string;
    digits: boolean;
    price: boolean;
    email: boolean;
    password: boolean;
    sameAs: string;
    required: boolean;
    regex: string;
    regexMessage: string;
    min: number;
    max: number;
    center: boolean;
    large: boolean;
    emphasis: boolean;
    novalidate: boolean;
    root: HTMLElement;
    message: string;
    render(): any;
    Change(): void;
    MessageWatcher(): void;
    IsValid(): Promise<boolean>;
    Validate(): Promise<void>;
}
