import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  standalone:true,
  imports:[MatButtonModule,MatIconModule,MatMenuModule,MatPaginatorModule,MatDialogModule],
  selector: 'app-my-group',
  templateUrl: './my-group.component.html',
  styleUrls: ['./my-group.component.css']
})
export class MyGroupComponent implements OnInit {
  readonly dialog = inject(MatDialog);

  constructor() { }

  ngOnInit() {
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

  openDetailDialog() {
    const dialogRef = this.dialog.open(GroupDetailDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCreateGroupDialog() {
    const dialogRef = this.dialog.open(CreateGroupDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}

@Component({
  standalone:true,
  imports:[MatDialogModule, MatButtonModule],
  templateUrl:'./delete-dialog.html',
  styles:''
})
export class DeleteDialog{}

@Component({
  standalone:true,
  imports:[MatDialogModule, MatButtonModule],
  templateUrl:'./group-detail-dialog.html',
  styles:''
})
export class GroupDetailDialog{}


@Component({
  standalone:true,
  imports:[MatDialogModule, MatButtonModule],
  templateUrl:'./create-group-dialog.html',
  styles:''
})
export class CreateGroupDialog{}
