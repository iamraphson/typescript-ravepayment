export interface IRaveOptions {
    PBFPubKey: string;
    txref: string;
    amount: number;
    currency?: string;
    country?: string;
    customer_email: string;
    customer_firstname?: string;
    customer_lastname?: string;
    custom_title?: string;
    custom_description?: string;
    custom_logo?: string;
    meta?: any;
    callback: (response: any) => void;
    onclose: () => void;
}
export default class RavePayment {
    private loadAPI;
    private isProduction;
    constructor(isProduction?: boolean);
    pay(raveOption: IRaveOptions): void;
    private loadScript(callback);
}
export declare function Ravepay(isProduction?: boolean): RavePayment;
