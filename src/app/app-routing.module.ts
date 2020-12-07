import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { DetailsComponent } from './documents/details/details.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'documents', component:DocumentsComponent},
  {path: 'documents/edit/:id', component: DetailsComponent},
  {path: '', redirectTo: 'documents', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
