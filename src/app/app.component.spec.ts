import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should initialise a model correctly', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.model.sonnets.length).toEqual(154);
    expect(app.model.messages).toEqual([]);
    expect(app.model.message).toEqual(null);
    expect(app.model.sonnetIndex).toEqual(0);
    expect(app.model.replying).toEqual(false);
  }));

  describe('When onSubmit is called', () => {
    it('should push the message to the message stack.', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      app.model.message = 'some text';
      app.onSubmit();

      expect(app.model.messages.length).toEqual(1);
      expect(app.model.messages[0]).toEqual({
        self: true,
        text: 'some text'
      });
    }));

    it('should clear the current message.', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      app.model.message = 'some text';
      app.onSubmit();

      expect(app.model.message).toEqual(null);
    }));

    it('should simulate a response.', fakeAsync(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      //const tick =
      app.model.message = 'some text';
      app.onSubmit();

      tick(1500);
      fixture.detectChanges();

      expect(app.model.replying).toEqual(true);

      tick(2000);
      fixture.detectChanges();

      expect(app.model.messages.length).toEqual(2);
      expect(app.model.sonnetIndex).toEqual(1);
      expect(app.model.replying).toEqual(false);
    }));
  });
});
