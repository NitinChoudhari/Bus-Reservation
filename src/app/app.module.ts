import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusListRenderComponent } from './bus-list-render/bus-list-render.component';
import { SearReservationComponent } from './sear-reservation/sear-reservation.component';
import { SelectBusService } from './services/selectBus.service';
import { BookingService } from './services/booking.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BusListRenderComponent,
    SearReservationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SelectBusService,
    BookingService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
