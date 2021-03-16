import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { PatientsComponent } from './patients/patients.component'; 
import { PractitionerRoleComponent } from './practitionerrole/practitionerrole.component';

const routes: Routes = [ 
  { path:
  '', 
  component: PatientsComponent,
}, 
{ 
  path: 'patients',
  component: PatientsComponent 
} 
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
}) 
export class AppRoutingModule { }