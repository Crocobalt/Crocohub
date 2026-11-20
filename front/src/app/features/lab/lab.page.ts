import { Component } from '@angular/core';
import { Footer } from '../../shared/components/footer/footer';
import { Header } from '../../shared/components/header/header';

// Lab page: my personal projects and apps (CH-10).
@Component({
  imports: [Header, Footer],
  selector: 'app-lab',
  styleUrl: './lab.page.css',
  templateUrl: './lab.page.html',
})
export class LabPage {}
