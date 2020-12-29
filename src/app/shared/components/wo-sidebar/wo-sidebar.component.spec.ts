import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoSidebarComponent } from './wo-sidebar.component';

describe('WoSidebarComponent', () => {
  let component: WoSidebarComponent;
  let fixture: ComponentFixture<WoSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
