import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllScootersComponent } from './all-scooters.component';

describe('AllScootersComponent', () => {
  let component: AllScootersComponent;
  let fixture: ComponentFixture<AllScootersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllScootersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllScootersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
