export class Item{
    price: number;
    documents: number;
    _id: number;
    article: string;
    quantity: number;

    constructor(obj?: any){
        this.price = obj && obj.price || null;
        this.documents = obj && obj.documents || null;
        this._id = obj && obj._id || null;
        this.article = obj && obj.article || null;
        this.quantity = obj && obj.quantity || null;
    }
}