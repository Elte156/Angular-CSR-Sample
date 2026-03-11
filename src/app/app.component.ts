import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, FormsModule]
})
export class AppComponent {
  title = 'angular-sample';
  searchValue: string = "";

  constructor(private router: Router) { }

  newsSearch() {
    this.router.navigateByUrl('/news?search=' + this.searchValue);
  }
}
