import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingProjectOverviewComponent } from './existing-project-overview.component';

describe('ExistingProjectOverviewComponent', () => {
  let component: ExistingProjectOverviewComponent;
  let fixture: ComponentFixture<ExistingProjectOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingProjectOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingProjectOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
