export declare class OrderInpost {
    search: string;
    api: string;
    root: HTMLElement;
    widget: any;
    componentDidLoad(): void;
    description: string;
    address: string;
    code: string;
    initialized: boolean;
    Show(event: Event): void;
    Hide(): void;
    valid: boolean;
    Validate(): Promise<void>;
    IsValid(): Promise<boolean>;
    render(): any[];
}
