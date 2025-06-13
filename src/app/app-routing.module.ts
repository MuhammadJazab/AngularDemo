import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { VisitFormComponent } from './features/visit-form/visit-form.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'visit-form', component: VisitFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
