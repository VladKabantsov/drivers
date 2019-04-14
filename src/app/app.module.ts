import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule, MatProgressBarModule } from '@angular/material';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatepickerComponent,
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
    MatIconModule,
    MatProgressBarModule,
    NgbModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  entryComponents: [DatepickerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
