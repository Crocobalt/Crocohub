import { Component } from '@angular/core';
import { Footer } from '../../shared/components/footer/footer';
import { Header } from '../../shared/components/header/header';

// CV page: online resume (CH-9).
@Component({
  imports: [Header, Footer],
  selector: 'app-cv',
  styleUrl: './cv.page.css',
  templateUrl: './cv.page.html',
})
export class CvPage {}
