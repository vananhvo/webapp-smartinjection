import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWellComponent } from './create-well.component';

describe('CreateWellComponent', () => {
  let component: CreateWellComponent;
  let fixture: ComponentFixture<CreateWellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
