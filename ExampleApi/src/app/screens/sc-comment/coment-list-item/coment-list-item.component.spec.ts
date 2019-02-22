import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentListItemComponent } from './coment-list-item.component';

describe('ComentListItemComponent', () => {
  let component: ComentListItemComponent;
  let fixture: ComponentFixture<ComentListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
