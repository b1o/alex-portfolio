import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderlineButtonComponent } from './underline-button.component';

describe('UnderlineButtonComponent', () => {
  let component: UnderlineButtonComponent;
  let fixture: ComponentFixture<UnderlineButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderlineButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderlineButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
