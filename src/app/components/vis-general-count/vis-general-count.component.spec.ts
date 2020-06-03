import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisGeneralCountComponent } from './vis-general-count.component';

describe('VisGeneralCountComponent', () => {
  let component: VisGeneralCountComponent;
  let fixture: ComponentFixture<VisGeneralCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisGeneralCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisGeneralCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
