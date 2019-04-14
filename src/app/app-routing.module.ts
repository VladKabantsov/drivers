import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RidesComponent } from './components/rides/rides.component';
import { PostRideComponent } from './components/post-ride/post-ride.component';
import { JoinedRideComponent } from './components/joined-ride/joined-ride.component';
import { PostedRideComponent } from './components/posted-ride/posted-ride.component';

const routes: Routes = [
  { path: '', component: RidesComponent, pathMatch: 'full' },
  { path: 'add/ride', component: PostRideComponent, pathMatch: 'full' },
  { path: 'joined/ride', component: JoinedRideComponent, pathMatch: 'full' },
  { path: 'posted/ride', component: PostedRideComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
