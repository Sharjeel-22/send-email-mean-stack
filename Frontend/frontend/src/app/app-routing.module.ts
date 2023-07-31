import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendEmailComponent } from './send-email/send-email.component';

const routes: Routes = [
  {path:'',redirectTo:'/send-email',pathMatch:'full'},
  {path:'send-email',component:SendEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
