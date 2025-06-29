import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavBar } from './shared/header-nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderNavBar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'angular-UI-practice';
}
