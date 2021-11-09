import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoindexComponent } from './autoindex/autoindex.component';

const routes: Routes = [{
  path: '**', component: AutoindexComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
