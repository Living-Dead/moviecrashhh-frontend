import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierMoviesModalComponent } from './premier-movies-modal.component';

describe('PremierMoviesModalComponent', () => {
  let component: PremierMoviesModalComponent;
  let fixture: ComponentFixture<PremierMoviesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremierMoviesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremierMoviesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
