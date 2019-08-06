import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoomingSoonComicBooksComponent } from './cooming-soon-comic-books.component';

describe('CoomingSoonComicBooksComponent', () => {
  let component: CoomingSoonComicBooksComponent;
  let fixture: ComponentFixture<CoomingSoonComicBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoomingSoonComicBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoomingSoonComicBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
