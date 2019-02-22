import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScCommentComponent } from './sc-comment.component';

describe('ScCommentComponent', () => {
  let component: ScCommentComponent;
  let fixture: ComponentFixture<ScCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
