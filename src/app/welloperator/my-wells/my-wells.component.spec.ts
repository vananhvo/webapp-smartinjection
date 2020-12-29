import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWellsComponent } from './my-wells.component';

describe('MyWellsComponent', () => {
  let component: MyWellsComponent;
  let fixture: ComponentFixture<MyWellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
