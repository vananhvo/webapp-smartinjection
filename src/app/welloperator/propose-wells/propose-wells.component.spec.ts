import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposeWellsComponent } from './propose-wells.component';

describe('ProposeWellsComponent', () => {
  let component: ProposeWellsComponent;
  let fixture: ComponentFixture<ProposeWellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposeWellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposeWellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
