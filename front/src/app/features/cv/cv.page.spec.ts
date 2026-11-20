import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CvPage } from './cv.page';

describe('CvPage', () => {
  let component: CvPage;
  let fixture: ComponentFixture<CvPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CvPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the site header and footer', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header')).not.toBeNull();
    expect(compiled.querySelector('app-footer')).not.toBeNull();
  });

  it('should display the profile photo with an alt text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('img.photo')?.getAttribute('alt')).toBe('Corentin Turgis');
  });

  it('should not expose a phone number', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // Matches French phone numbers like "06 24 08 03 88" or "0624080388"
    expect(compiled.textContent).not.toMatch(/0\d([ .]?\d{2}){4}/);
  });
});
