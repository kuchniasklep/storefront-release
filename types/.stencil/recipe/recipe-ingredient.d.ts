export declare class RecipeIngredient {
    root: HTMLElement;
    name: string;
    amount: string;
    id: number;
    regex: RegExp;
    checked: boolean;
    componentWillRender(): void;
    getCookie(): boolean;
    setCookie(): void;
    removeCookie(): void;
    click(event: Event): void;
    render(): any[];
}
