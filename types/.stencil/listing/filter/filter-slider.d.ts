export declare class FilterSlider {
    el: HTMLElement;
    name: string;
    ids: string;
    values: string;
    snap: boolean;
    step: number;
    from: number;
    to: number;
    fromId: string;
    toId: string;
    valueArray: string[];
    idArray: string[];
    handleActive: boolean;
    swipeLeftHandler(event: Event): void;
    clickHandler(event: Event): void;
    componentDidLoad(): void;
    private convertValuesToRangeMap;
    render(): any[];
}
