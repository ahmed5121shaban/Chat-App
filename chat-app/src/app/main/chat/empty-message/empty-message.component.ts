import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  standalone:true,
  imports:[MatIconModule,MatButtonModule, MatMenuModule],
  selector: 'app-empty-message',
  templateUrl: './empty-message.component.html',
  styleUrls: ['./empty-message.component.css']
})
export class EmptyMessageComponent implements OnInit {
  private selectedFileName: string = '';
  constructor() { }

  ngOnInit() {
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFileName = input.files[0].name; // Update the file name
    }
  }

}
