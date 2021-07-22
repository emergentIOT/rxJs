/*
Modules
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
/**
 * Components
 */
import { PromiseComponent } from './promise/promise.component';
import { TourHeroesComponent } from './tour-heroes/tour-heroes.component';
import { TourHeroesDetailComponent } from './tour-heroes-detail/tour-heroes-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes : Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  // { path: 'promise', component: PromiseComponent},
  { path: 'heroes', component: TourHeroesComponent},
  { path: 'hero-detail/:id', component: TourHeroesDetailComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'promise', component: PromiseComponent}
  // { path: 'tour-detail', component: TourHeroesDetailComponent},
  // { path: 'messages', component: MessagesComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
