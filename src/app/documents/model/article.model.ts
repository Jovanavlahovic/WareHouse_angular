export class Article{
        name: string;
        code: string;
        _id: number;

        constructor(obj?:any){
             this.name = obj && obj.name || '';
             this.code = obj && obj.code || '';
             this._id = obj && obj._id || null;
        }
}