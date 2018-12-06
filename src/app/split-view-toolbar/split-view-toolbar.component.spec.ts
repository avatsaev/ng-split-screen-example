import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitViewToolbarComponent } from './split-view-toolbar.component';

describe('SplitViewToolbarComponent', () => {
  let component: SplitViewToolbarComponent;
  let fixture: ComponentFixture<SplitViewToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitViewToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitViewToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
