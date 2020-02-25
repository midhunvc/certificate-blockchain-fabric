import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplycertComponent } from './applycert.component';

describe('ApplycertComponent', () => {
  let component: ApplycertComponent;
  let fixture: ComponentFixture<ApplycertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplycertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplycertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
