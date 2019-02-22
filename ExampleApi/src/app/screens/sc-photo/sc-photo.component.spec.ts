import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScPhotoComponent } from './sc-photo.component';

describe('ScPhotoComponent', () => {
  let component: ScPhotoComponent;
  let fixture: ComponentFixture<ScPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
