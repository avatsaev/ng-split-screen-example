import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitDashboardComponent } from './split-dashboard.component';

describe('SplitDashboardComponent', () => {
  let component: SplitDashboardComponent;
  let fixture: ComponentFixture<SplitDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
