import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CounterUtComponent } from './counter-ut.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CounterUtComponent', () => {
  let fixture: ComponentFixture<CounterUtComponent>;
  let debugElement: DebugElement;
  let componentInstance: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CounterUtComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(CounterUtComponent);
    // fixture.componentInstance and fixture.debugElement.componentInstance are the same
    componentInstance = fixture.componentInstance;
    debugElement = fixture.debugElement;
  }));

  it('should create the app', () => {
    expect(componentInstance).toBeTruthy();
  });

  it(`should have as title 'angular102'`, () => {
    expect(componentInstance.title).toEqual('angular102');
  });

  it('should render title of the counter `My counter app`', () => {
    fixture.detectChanges();
    const compiled = debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('My counter app');
  });

  it('should initialise the counter when the app started', () => {
    expect(componentInstance.value).toEqual(0);
    expect(componentInstance.message).toBeUndefined();
  });

  it('should increment and decrement the counter', () => {
    componentInstance.increment();
    expect(componentInstance.value).toEqual(1);
    componentInstance.decrement();
    expect(componentInstance.value).toEqual(0);
  });

  it('should increment the counter by 1 in the template', () => {
    debugElement.query(By.css('button.increment')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(componentInstance.value).toEqual(1);
    const value = debugElement.query(By.css('h2')).nativeElement.innerText;
    expect(value).toEqual('1');
  });
  it('should stop at 0 and show minimum message', () => {
    debugElement.query(By.css('button.decrement')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(componentInstance.value).toEqual(0);
    expect(debugElement.query(By.css('h2')).nativeElement.innerText).toBe('0');
    expect(debugElement.query(By.css('p.message')).nativeElement.innerText).toContain('Minimum reached!');
  });
  it('should stop at 15 and show max message', () => {
    componentInstance.value = 15;
    debugElement.query(By.css('button.increment')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(componentInstance.value).toEqual(15);
    expect(debugElement.query(By.css('h2')).nativeElement.innerText).toBe('15');
    expect(debugElement.query(By.css('p.message')).nativeElement.innerText).toContain('Maximum');
  });

});

