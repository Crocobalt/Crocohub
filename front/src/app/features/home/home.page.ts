import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../shared/components/footer/footer';
import { Header } from '../../shared/components/header/header';

// Home page: site presentation and links to CV and apps (CH-8).
@Component({
  imports: [Header, Footer, RouterLink],
  selector: 'app-home',
  styleUrl: './home.page.css',
  templateUrl: './home.page.html',
})
export class HomePage {}
