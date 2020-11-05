import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelloperatorComponent } from './welloperator.component';

describe('WelloperatorComponent', () => {
  let component: WelloperatorComponent;
  let fixture: ComponentFixture<WelloperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelloperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelloperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
