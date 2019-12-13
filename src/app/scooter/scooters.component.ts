import {Component, OnInit} from '@angular/core';
import {Scooter} from '../all-scooters/all-scooters.component';
import {ScooterService} from '../scooter.service';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-scooter',
  templateUrl: './scooters.component.html',
  styleUrls: ['./scooters.component.css']
})
export class ScooterComponent implements OnInit {

  title = 'my-app';


  scooters: Scooter[];


  constructor(private scooterService: ScooterService, public loginService: AuthenticationService) {
  }

  ngOnInit() {
    this.scooterService.findNearest().subscribe(data => {
      this.scooters = data;
    });
  }


}
