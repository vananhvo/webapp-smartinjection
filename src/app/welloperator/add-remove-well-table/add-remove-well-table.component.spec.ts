import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveWellTableComponent } from './add-remove-well-table.component';

describe('AddRemoveWellTableComponent', () => {
  let component: AddRemoveWellTableComponent;
  let fixture: ComponentFixture<AddRemoveWellTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemoveWellTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveWellTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
