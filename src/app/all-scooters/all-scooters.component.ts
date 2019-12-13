import { Component, OnInit } from '@angular/core';
import {ScooterService} from '../scooter.service';

@Component({
  selector: 'app-all-scooters',
  templateUrl: './all-scooters.component.html',
  styleUrls: ['./all-scooters.component.css']
})
export class AllScootersComponent implements OnInit {

  title = 'my-app';

  displayedColumns: string[] = ['id', 'maker', 'model', 'color',
    'weight', 'carrying', 'max speed', 'battery', 'engine'];


  scooters: Scooter[];

  constructor(private scooterService: ScooterService) {
  }

  ngOnInit() {
    this.scooterService.findAll().subscribe(data => {
      this.scooters = data;
    });
  }
}

export interface Scooter {
  id: number;
  vacant: boolean;
  maker: string;
  model: string;
  color: string;
  weight: number;
  carrying: number;
  maxSpeed: number;
  batteryCapacity: number;
  enginePower: number;
  tariffId: number;
  latitude: number;
  longitude: number;
}
