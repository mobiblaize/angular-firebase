import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent implements OnInit {
  canDelete!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() delete = new EventEmitter<boolean>();

  cancel() {
    this.canDelete = false;
  }

  prepareForDelete() {
    this.canDelete = true;
  }

  deleteBoard() {
    this.delete.emit(true);
    this.canDelete = false;
  }


}
