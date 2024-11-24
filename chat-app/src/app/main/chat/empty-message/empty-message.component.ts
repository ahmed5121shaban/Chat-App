import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  standalone:true,
  imports:[],
  selector: 'app-empty-message',
  templateUrl: './empty-message.component.html',
  styleUrls: ['./empty-message.component.css']
})
export class EmptyMessageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }



}
