import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UicmainComponent } from './uicmain.component';

describe('UicmainComponent', () => {
  let component: UicmainComponent;
  let fixture: ComponentFixture<UicmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UicmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UicmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
