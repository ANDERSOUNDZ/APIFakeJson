import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScAlbumComponent } from './sc-album.component';

describe('ScAlbumComponent', () => {
  let component: ScAlbumComponent;
  let fixture: ComponentFixture<ScAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
