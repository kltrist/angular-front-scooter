import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FullMovement} from '../movement/movement.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly movements: string;
  movement: Movement;

  constructor(private http: HttpClient) {
    this.movements = 'http://localhost:8080/movements';

  }

  public startRide(order: Order) {
    console.log(order);
    console.log('Forwarding...');
    let observable = this.http.post<any>(this.movements, order).subscribe();
    console.log('Done...');
    return observable;
  }

  public getMovementHistory(): Observable<FullMovement[]> {
    return this.http.get<FullMovement[]>(this.movements);
  }

}

const headers = new Headers({'Content-Type': 'application/json'});
headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT, OPTIONS');
headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
headers.append('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');

export interface Order {
  scooterId: number,
  creditCard: {
    number: string,
    expiration: string,
    cvv: string
  }
}


export interface Movement {
  cost: number,
  mileage: number,
  startTime: string,
  endTime: string
}
