import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitViewContainerComponent } from './split-view-container.component';

describe('SplitViewContainerComponent', () => {
  let component: SplitViewContainerComponent;
  let fixture: ComponentFixture<SplitViewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitViewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
