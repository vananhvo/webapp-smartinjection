import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectConfirmComponent } from './project-confirm.component';

describe('ProjectConfirmComponent', () => {
  let component: ProjectConfirmComponent;
  let fixture: ComponentFixture<ProjectConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
