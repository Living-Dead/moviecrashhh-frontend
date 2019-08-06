import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlayingCinemaMovies } from './now-playing-cinema-movies.component';

describe('NowPlayingCinemaMoviesComponent', () => {
  let component: NowPlayingCinemaMovies;
  let fixture: ComponentFixture<NowPlayingCinemaMovies>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NowPlayingCinemaMovies]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowPlayingCinemaMovies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
