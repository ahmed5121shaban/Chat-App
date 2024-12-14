import { Component, inject, OnInit } from '@angular/core';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  standalone:true,
  imports:[MatPaginatorModule,MatButtonModule, MatDialogModule],
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  constructor() { }

  ngOnInit() {
  }

  openDetailDialog() {
    const dialogRef = this.dialog.open(DialogDetail);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openJoinDialog() {
    const dialogRef = this.dialog.open(DialogJoin);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = true;
  showPageSizeOptions = false;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent | undefined;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

}

@Component({
  standalone:true,
  selector: 'dialog-detail',
  templateUrl: './group-detail-dialog.html',
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogDetail {}

@Component({
  standalone:true,
  selector: 'dialog-join',
  templateUrl: './group-join-dialog.html',
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogJoin{}
