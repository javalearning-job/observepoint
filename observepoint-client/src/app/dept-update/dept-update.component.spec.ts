import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptUpdateComponent } from './dept-update.component';

describe('DeptUpdateComponent', () => {
  let component: DeptUpdateComponent;
  let fixture: ComponentFixture<DeptUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
