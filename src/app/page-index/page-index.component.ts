import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-index',
  templateUrl: './page-index.component.html',
  styleUrls: ['./page-index.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PageIndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
