export class Price {
    currency: string;
    amount: number;
    decimals: number;

    constructor(
        currency: string,
        amount: number,
        decimals: number,
    ) {
        this.currency = currency;
        this.amount = amount;
        this.decimals = decimals;
    }
}