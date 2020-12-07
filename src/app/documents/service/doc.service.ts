import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../model/article.model';
import { DocumentList } from '../model/documentList.model';
import { Documents } from '../model/documents.model';
import { Item } from '../model/item.model';

const baseUrl = 'http://localhost:3000/api/documents';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor(private http: HttpClient) { }

  getAllDocuments(params?):Observable<DocumentList>{
    let queryParams = {};

    if(params){
      queryParams = { params: new HttpParams()
        .set('page', params.page && params.page.toString() || '')
        .set('pageSize', params.pageSize && params.pageSize.toString() || '')
        .set('sort', params.sort && params.sort.toString() || '')
        .set('sortDirection', params.sortDirection && params.sortDirection.toString() || 'desc')
      }
    }
    return this.http.get(baseUrl, queryParams).pipe(map(
      (x:any) => new DocumentList(x)
    ))
  }

  getDocument(id:number):Observable<Documents>{
    return this.http.get(`${baseUrl}/${id}`).pipe(map(x => new Documents(x)))
  }

  editDocument(document: Documents):Observable<Documents>{
    return this.http.put(`${baseUrl}/${document._id}`, document).pipe(map(x => new Documents(x)))
  }

  getItems(id: number):Observable<Item[]>{
    return this.http.get(`http://localhost:3000/api/documents/${id}/items`).pipe(map((x:any) => x.results as Array<Item>))
  }

  getArticles(): Observable<Article[]>{
    return this.http.get('http://localhost:3000/api/articles').pipe(map((x:any) => x.results as Array<Article>))
  }

  addArticle(item: Item, docId: number): Observable<Item>{
    return this.http.post(`${baseUrl}/${docId}/items`, item).pipe(map(x => new Item(x)))
  }
}
