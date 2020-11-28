import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UicprojectsComponent } from './uicprojects.component';

describe('UicprojectsComponent', () => {
  let component: UicprojectsComponent;
  let fixture: ComponentFixture<UicprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UicprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UicprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
