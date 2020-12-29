import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoDashboardComponent } from './wo-dashboard.component';

describe('WoDashboardComponent', () => {
  let component: WoDashboardComponent;
  let fixture: ComponentFixture<WoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
