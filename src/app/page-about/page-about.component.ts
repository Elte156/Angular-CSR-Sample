import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PageAboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
