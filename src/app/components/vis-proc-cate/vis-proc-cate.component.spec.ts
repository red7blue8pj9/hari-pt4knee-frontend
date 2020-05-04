import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisProcCateComponent } from './vis-proc-cate.component';

describe('VisProcCateComponent', () => {
  let component: VisProcCateComponent;
  let fixture: ComponentFixture<VisProcCateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisProcCateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisProcCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
