import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DateCountComponent} from './vis-date-count.component';

describe('DateCountComponent', () => {
  let component: DateCountComponent;
  let fixture: ComponentFixture<DateCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DateCountComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
