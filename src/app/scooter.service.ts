import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Scooter} from './all-scooters/all-scooters.component';

@Injectable({
  providedIn: 'root'
})
export class ScooterService {
  private readonly nearestScooters: string;
  private readonly allScooters: string;

  constructor(private http: HttpClient) {
    this.nearestScooters = 'http://localhost:8080/scooters/nearest';
    this.allScooters = 'http://localhost:8080/scooters';
  }

  public findAll(): Observable<Scooter[]> {
    return this.http.get<Scooter[]>(this.allScooters);

  }

  public findNearest(): Observable<Scooter[]> {
    return this.http.get<Scooter[]>(this.nearestScooters);
  }



}




