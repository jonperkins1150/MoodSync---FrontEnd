import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserplaylistsComponent } from './userplaylists.component';

describe('UserplaylistsComponent', () => {
  let component: UserplaylistsComponent;
  let fixture: ComponentFixture<UserplaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserplaylistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserplaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
