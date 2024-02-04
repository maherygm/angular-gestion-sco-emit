import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular17_without_standalone';

  ngOnInit(): void {
    Aos.init();
  }
}
