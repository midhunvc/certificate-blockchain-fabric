import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigncmpnyComponent } from './signcmpny.component';

describe('SigncmpnyComponent', () => {
  let component: SigncmpnyComponent;
  let fixture: ComponentFixture<SigncmpnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigncmpnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigncmpnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
