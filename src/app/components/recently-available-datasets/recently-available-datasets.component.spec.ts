import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyAvailableDatasetsComponent } from './recently-available-datasets.component';

describe('RecentlyAvailableDatasetsComponent', () => {
  let component: RecentlyAvailableDatasetsComponent;
  let fixture: ComponentFixture<RecentlyAvailableDatasetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentlyAvailableDatasetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlyAvailableDatasetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
