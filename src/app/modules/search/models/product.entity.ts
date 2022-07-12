import { Author } from './author.entity';
import { Item } from './item.entity';

export class Product {
    author: Author;
    categories: Array<any>;
    items: Item[];

    constructor(
        author: Author,
        categories: Array<any>,
        items: Item[],
    ) {
        this.author = author;
        this.categories = categories;
        this.items = items;
    }
}