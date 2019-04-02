import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('<app-root>', () => {
  let sut: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();

    sut = TestBed.createComponent(AppComponent);
    sut.detectChanges();
  });

  describe('When the application starts', () => {
    it('renders the whole component', () => {
      // ComponentFixture is serialized by jest-preset-angular
      expect(sut).toMatchSnapshot();
    });

    it('displays the welcome message', () => {
      // HTML is also serialized by jest-preset-angular
      const welcomeMessage = sut.debugElement.query(By.css('p')).nativeElement;
      expect(welcomeMessage).toMatchSnapshot();
    });
  });
});
