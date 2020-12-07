import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../model/article.model';
import { Documents } from '../model/documents.model';
import { Item } from '../model/item.model';
import { DocService } from '../service/doc.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
document: Documents;
id: number;
items: Item[];
articles: Article[];
article: Item;

  constructor(private route: ActivatedRoute, private service: DocService) { 
    this.article = new Item();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDocument();
    this.getItems();
    this.getArticles();
  }

  getDocument():void{
    this.service.getDocument(this.id).subscribe(x => {this.document = x; console.log(this.document.status)});
  }

  recordDocument():void{
    this.document.status = 'recorded';
    this.service.editDocument(this.document).subscribe(x => {
      this.document = x;
      this.getDocument();
    })
  }

  getItems():void{
    this.service.getItems(this.id).subscribe(x => this.items = x);
  }

  getArticles():void{
    this.service.getArticles().subscribe(x => this.articles = x);
  }

  addArticle():void{
    this.service.addArticle(this.article, this.id).subscribe(x => {
      this.getItems();
    })
  }

  getName(articleCode: string): string{
    for(var i of this.articles){
      if(i.code == articleCode){
        return i.name;
      }
    }
  }
}
