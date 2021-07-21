import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourHeroesDetailComponent } from './tour-heroes-detail.component';

describe('TourHeroesDetailComponent', () => {
  let component: TourHeroesDetailComponent;
  let fixture: ComponentFixture<TourHeroesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourHeroesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourHeroesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
