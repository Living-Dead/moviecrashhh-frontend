import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSeriesModalComponent } from './tv-series-modal.component';

describe('TvSeriesModalComponent', () => {
  let component: TvSeriesModalComponent;
  let fixture: ComponentFixture<TvSeriesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvSeriesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSeriesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
