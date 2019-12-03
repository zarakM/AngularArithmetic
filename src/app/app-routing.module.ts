import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArithmeticComponent } from './arithmetic/arithmetic.component';



const routes: Routes = [
  { path: 'calculator', component: ArithmeticComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
