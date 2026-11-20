import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Site header: shows the site owner's name, linking back to the home page (navigation menu to come).
@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {}
