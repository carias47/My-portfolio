import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: 'portfolio',
    component: sidebarComponent,
  },
  {
    path: '**',
    redirectTo: 'portfolio',
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
