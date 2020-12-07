import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Documents } from '../model/documents.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
})
export class DocumentListComponent implements OnInit {
  @Input() documentList: Documents[];
  @Output() sortBy: EventEmitter<string> = new EventEmitter();
  @Input() dateOfCreation: boolean;
  @Input() dateOfRecording: boolean;
  @Input() status: boolean;
  @Input() transactionType: boolean;
  @Input() businessPartnerName: boolean;
  @Input() businessPartnerLocation: boolean;
  @Input() year: boolean;

  constructor() {}

  ngOnInit(): void {}

  sort(sort: string) {
    this.sortBy.emit(sort);
  }
}
