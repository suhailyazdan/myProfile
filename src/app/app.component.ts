import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images = [1, 2, 3].map((n) => `assets/banner${n}.jpg`);
  public isCollapsed = true;
}
