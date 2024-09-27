import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OffertableComponent } from './offertable/offertable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OffertableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Aggridexample';
}
