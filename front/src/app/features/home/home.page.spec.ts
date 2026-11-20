import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should link to the CV page', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[href="/cv"]')).not.toBeNull();
  });

  it('should link to the lab page', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[href="/lab"]')).not.toBeNull();
  });
});
