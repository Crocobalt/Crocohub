import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Root shell: renders the active page through the router.
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
