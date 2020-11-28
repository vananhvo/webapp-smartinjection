import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReghomeComponent } from './reghome.component';

describe('ReghomeComponent', () => {
  let component: ReghomeComponent;
  let fixture: ComponentFixture<ReghomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReghomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
