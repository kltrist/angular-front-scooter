import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import {ScooterComponent} from './scooter/scooters.component';
import {AllScootersComponent} from './all-scooters/all-scooters.component';
import {PaymentComponent} from './payment/payment.component';

const routes: Routes = [
  { path: 'scooters/nearest', component: ScooterComponent,canActivate:[AuthGaurdService] },
  { path: 'scooters', component: AllScootersComponent,canActivate:[AuthGaurdService] },
  { path: 'payment/:id', component: PaymentComponent,canActivate:[AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: '', component: LogoutComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
