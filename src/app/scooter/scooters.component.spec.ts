import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ScooterComponent} from './scooters.component';


describe('NearestScootersComponent', () => {
  let component: ScooterComponent;
  let fixture: ComponentFixture<ScooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
