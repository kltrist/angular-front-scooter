import {Component, OnInit} from '@angular/core';
import {Movement} from '../service/order.service';
import {HttpClient} from '@angular/common/http';

export interface FullMovement {
  scooterId: number,
  startCoordinate: {
    latitude: string,
    longitude: string,
  },
  finishCoordinate: {
    latitude: string,
    longitude: string
  },
  cost: number,
  mileage: number,
  startTime: string,
  endTime: string,
  active: boolean
}

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent implements OnInit {

  private movements: string;

  constructor(private http: HttpClient) {
    this.movements = 'http://localhost:8080/movements';

  }

  ngOnInit() {
  }

  movement: Movement;
  isShow: boolean = false;


  finishMovement() {
    const order = JSON.parse(localStorage.getItem('order'));
    this.http.put<any>(this.movements, order).subscribe((value: Movement) => {
      console.log('VALUE:' + JSON.stringify(value));

      this.movement = {
        cost: value['cost'],
        mileage: value['mileage'],
        startTime: value['startTime'],
        endTime: value['endTime']
      };
      this.isShow = true;
    });

  }


}


