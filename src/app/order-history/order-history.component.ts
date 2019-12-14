import {Component, OnInit} from '@angular/core';
import {FullMovement} from '../movement/movement.component';
import {OrderService} from '../service/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orders: FullMovement[];

  constructor(private orderService: OrderService) {

  }

  ngOnInit() {
    this.orderService.getMovementHistory().subscribe(data =>
      this.orders = data
    );
  }

}
