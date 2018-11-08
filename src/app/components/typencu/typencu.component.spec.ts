import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypencuComponent } from './typencu.component';

describe('TypencuComponent', () => {
  let component: TypencuComponent;
  let fixture: ComponentFixture<TypencuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypencuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypencuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
