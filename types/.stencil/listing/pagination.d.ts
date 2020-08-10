export declare class Pagination {
    count: number;
    current: number;
    base: string;
    pattern: string;
    space: number;
    edges: boolean;
    handleResize(): void;
    componentWillLoad(): void;
    render(): any;
    link(index: number): string;
}
