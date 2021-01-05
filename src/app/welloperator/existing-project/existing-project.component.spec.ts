import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingProjectComponent } from './existing-project.component';

describe('ExistingProjectComponent', () => {
  let component: ExistingProjectComponent;
  let fixture: ComponentFixture<ExistingProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
