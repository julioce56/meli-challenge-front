import { Author } from './author.entity';
import { Item } from './item.entity';

export class ProductDetail {
    author: Author;
    items: Item;

    constructor(
        author: Author,
        items: Item,
    ) {
        this.author = author;
        this.items = items;
    }
}