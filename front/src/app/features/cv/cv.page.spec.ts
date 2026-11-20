import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CvPage } from './cv.page';

describe('CvPage', () => {
  let component: CvPage;
  let fixture: ComponentFixture<CvPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CvPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not expose a phone number', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // Matches French phone numbers like "06 24 08 03 88" or "0624080388"
    expect(compiled.textContent).not.toMatch(/0\d([ .]?\d{2}){4}/);
  });
});
