import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberComponent } from './shared/components/input-number/input-number.component';
import { CheckboxComponent } from './shared/components/checkbox/checkbox.component';
import { SelectComponent } from './shared/components/select/select.component';
import { RiderComponent } from './shared/components/rider/rider.component';
import { RidersCardComponent } from './shared/components/riders-card/riders-card.component';
import { RidesComponent } from './components/rides/rides.component';
import { PostRideComponent } from './components/post-ride/post-ride.component';
import { JoinedRideComponent } from './components/joined-ride/joined-ride.component';
import { PostedRideComponent } from './components/posted-ride/posted-ride.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    InputNumberComponent,
    CheckboxComponent,
    RiderComponent,
    RidersCardComponent,
    RidesComponent,
    PostRideComponent,
    JoinedRideComponent,
    PostedRideComponent,
    DatePickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
