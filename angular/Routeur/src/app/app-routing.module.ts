import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { StudentViewComponent } from './student-view/student-view.component';

const routes: Routes = [
  {
    path:"",
    component:SearchBarComponent
  },
  {
    path:"wcs/:studentName",
    component:StudentViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
