import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScToDoComponent } from './sc-to-do.component';

describe('ScToDoComponent', () => {
  let component: ScToDoComponent;
  let fixture: ComponentFixture<ScToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
