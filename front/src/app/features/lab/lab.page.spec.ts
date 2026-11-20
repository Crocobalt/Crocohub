import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LabPage } from './lab.page';

describe('LabPage', () => {
  let component: LabPage;
  let fixture: ComponentFixture<LabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LabPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the Quest Board game', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Quest Board');
  });
});
