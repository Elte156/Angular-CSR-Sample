import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-sample';
  searchValue: string = "";

  constructor(private router: Router) { }

  newsSearch() {
    this.router.navigateByUrl('/news?search=' + this.searchValue);
  }
}
