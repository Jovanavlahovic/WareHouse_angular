import { Component, OnInit } from '@angular/core';
import { DocumentList } from './model/documentList.model';
import { Documents } from './model/documents.model';
import { DocService } from './service/doc.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
})
export class DocumentsComponent implements OnInit {
  documentList: DocumentList;
  params = {
    sort: '',
    sortDirection: '',
    page: 1,
    pageSize: 10,
  };
  dateOfCreation: boolean = true;
  dateOfRecording: boolean = true;
  status: boolean = true;
  transactionType: boolean = true;
  businessPartnerName: boolean = true;
  businessPartnerLocation: boolean = true;
  year: boolean = true;
  btnOpen: boolean = true;
  btnClose: boolean = false;

  constructor(private service: DocService) {}

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments(): void {
    this.service.getAllDocuments(this.params).subscribe((x) => {
      this.documentList = x;
    });
  }

  setSortParams(sort: string): void {
    this.params.sort = sort;
    this.getDocuments();
  }

  toggleTableCols(col: string):void{
    if(col == 'dateOfCreation'){
      this.dateOfCreation = !this.dateOfCreation;
    } else if( col == 'dateOfRecording'){
      this.dateOfRecording = !this.dateOfRecording
    } else if(col == 'transactionType'){
      this.transactionType = !this.transactionType;
    } else if(col == 'status'){
      this.status = !this.status;
    } else if(col == 'businessPartnerName'){
      this.businessPartnerName = !this.businessPartnerName;
    } else if(col == 'businessPartnerLocation'){
      this.businessPartnerLocation = !this.businessPartnerLocation;
    } else if(col == 'year'){
      this.year = !this.year;
    }
  }

  showBtn(btn: string):void{
    if(btn == 'close'){
      this.btnClose = true;
      this.btnOpen = false;
    } else if(btn == 'open'){
      this.btnOpen = true;
      this.btnClose = false;
    }
  }

  getPage(page:number):void{
    this.params.page = page;
    this.getDocuments();
  }
}
