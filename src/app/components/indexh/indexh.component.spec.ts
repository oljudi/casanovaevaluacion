import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexhComponent } from './indexh.component';

describe('IndexhComponent', () => {
  let component: IndexhComponent;
  let fixture: ComponentFixture<IndexhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
