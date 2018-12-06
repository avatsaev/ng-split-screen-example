import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitViewContainerPlaceholderComponent } from './split-view-container-placeholder.component';

describe('SplitViewContainerPlaceholderComponent', () => {
  let component: SplitViewContainerPlaceholderComponent;
  let fixture: ComponentFixture<SplitViewContainerPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitViewContainerPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitViewContainerPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
