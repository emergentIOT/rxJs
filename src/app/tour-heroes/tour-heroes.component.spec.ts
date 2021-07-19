import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourHeroesComponent } from './tour-heroes.component';

describe('TourHeroesComponent', () => {
  let component: TourHeroesComponent;
  let fixture: ComponentFixture<TourHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
