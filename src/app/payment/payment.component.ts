import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Order, OrderService} from '../service/order.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private orderService: OrderService, private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
  }

  start(cardForm: NgForm) {
    const id = +this.route.snapshot.paramMap.get('id');
    const json = cardForm.value;
    const order: Order = {
      scooterId: id,
      creditCard: {
        number: json['card-number'],
        expiration: json['expiry-month'] + '/' + json['expiry-year'],
        cvv: json['cvv']
      }
    };
    localStorage.setItem("order",JSON.stringify(order));
    this.orderService.startRide(order);
    this.router.navigate(['/movement']);
  }

}

