import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierMoviesComponent } from './premier-movies.component';

describe('PremierMoviesComponent', () => {
  let component: PremierMoviesComponent;
  let fixture: ComponentFixture<PremierMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremierMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremierMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
