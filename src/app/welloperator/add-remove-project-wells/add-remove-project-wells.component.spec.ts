import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveProjectWellsComponent } from './add-remove-project-wells.component';

describe('AddRemoveProjectWellsComponent', () => {
  let component: AddRemoveProjectWellsComponent;
  let fixture: ComponentFixture<AddRemoveProjectWellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemoveProjectWellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveProjectWellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
