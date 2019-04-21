import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodiesplaylistsComponent } from './moodiesplaylists.component';

describe('MoodiesplaylistsComponent', () => {
  let component: MoodiesplaylistsComponent;
  let fixture: ComponentFixture<MoodiesplaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodiesplaylistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodiesplaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
