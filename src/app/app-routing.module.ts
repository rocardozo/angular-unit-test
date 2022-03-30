import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponentComponent } from './basic-component/basic-component.component';

const routes: Routes = [
  {
    path: 'basic-component', component: BasicComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
