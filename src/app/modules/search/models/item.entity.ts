import { Price } from './price.entity';

export class Item {
    condition: string;
    free_shipping: boolean;
    id: string;
    picture: string;
    price: Price;
    title: string;
    seller_state?: string;
    description?: string;
    sold_quantity?: string;


    constructor(
        condition: string,
        free_shipping: boolean,
        id: string,
        picture: string,
        price: Price,
        title: string,
        seller_state?: string,
        description?: string,
        sold_quantity?: string,
    ) {
        this.condition = condition;
        this.free_shipping = free_shipping;
        this.id = id;
        this.picture = picture;
        this.price = price;
        this.title = title;
        this.seller_state = seller_state;
        this.description = description;
        this.sold_quantity = sold_quantity;
    }
}