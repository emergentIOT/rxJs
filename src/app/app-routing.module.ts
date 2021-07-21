import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { TourHeroesComponent } from './tour-heroes/tour-heroes.component';
import { TourHeroesDetailComponent } from './tour-heroes-detail/tour-heroes-detail.component';


const routes : Routes = [
  { path: '**', redirectTo: '/tour'},
  { path: 'promise', component: PromiseComponent},
  { path: 'tour', component: TourHeroesComponent},
  { path: 'tour-detail', component: TourHeroesDetailComponent}

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
