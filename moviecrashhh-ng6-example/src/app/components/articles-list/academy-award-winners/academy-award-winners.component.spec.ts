import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyAwardWinnersComponent } from './academy-award-winners.component';

describe('AcademyAwardWinnersComponent', () => {
  let component: AcademyAwardWinnersComponent;
  let fixture: ComponentFixture<AcademyAwardWinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademyAwardWinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyAwardWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
