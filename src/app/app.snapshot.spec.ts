import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('<app-root>', () => {
  let sut: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();

    sut = TestBed.createComponent(AppComponent);
  });

  describe('When the application stats', () => {
    it('displays the welcome message', () => {
      expect(sut).toMatchSnapshot();
    });
  });
});
