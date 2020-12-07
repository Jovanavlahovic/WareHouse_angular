import { Documents } from './documents.model';

export class DocumentList{
    count: number;
    results: number;

    constructor(obj:any){
        this.count = obj && obj.count || null;
        this.results = obj && obj.results.map(x => new Documents(x));
    }
}