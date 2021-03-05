import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptFormComponent } from './dept-form.component';

describe('DeptFormComponent', () => {
  let component: DeptFormComponent;
  let fixture: ComponentFixture<DeptFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
