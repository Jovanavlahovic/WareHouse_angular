import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DocService } from '../service/doc.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() numbOfDocuments: number;
  @Input() docsPerPage: number;
  numbOfPages: number;
  pageNumbers: any[];
  activePage: number = 1;
  @Output() sendPage: EventEmitter<number> = new EventEmitter();

  constructor(private service: DocService) {}

  ngOnInit(): void {
    
  }

  ngOnChanges():void{
    this.getPages();
  }
  
  getPages() {
      this.numbOfPages = Math.ceil(this.numbOfDocuments/ this.docsPerPage);
      this.pageNumbers = [];

      console.log(this.numbOfPages);
      for (var i = 1; i <= this.numbOfPages; i++) {
        this.pageNumbers.push(i);
      }
  }

  pageSelected(page: number): void {
    if (page > 0 && page <= this.numbOfPages) {
      this.activePage = page;
      this.sendPage.emit(this.activePage);
    }
  }
}
