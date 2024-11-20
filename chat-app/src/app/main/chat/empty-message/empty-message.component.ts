import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone:true,
  imports:[MatIconModule],
  selector: 'app-empty-message',
  templateUrl: './empty-message.component.html',
  styleUrls: ['./empty-message.component.css']
})
export class EmptyMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
