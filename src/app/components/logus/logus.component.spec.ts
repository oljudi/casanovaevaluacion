import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogusComponent } from './logus.component';

describe('LogusComponent', () => {
  let component: LogusComponent;
  let fixture: ComponentFixture<LogusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
