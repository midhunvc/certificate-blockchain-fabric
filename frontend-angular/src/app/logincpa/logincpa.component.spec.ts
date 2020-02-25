import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincpaComponent } from './logincpa.component';

describe('LogincpaComponent', () => {
  let component: LogincpaComponent;
  let fixture: ComponentFixture<LogincpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogincpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
