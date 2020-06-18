import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent  } from "./sign-in/sign-in.component";
import { InitialPageComponent } from './initial-page/initial-page.component';
import { AuthGuard } from './auth/auth.guard';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';

const routes:Routes =[
    {path:'', component:InitialPageComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:SignInComponent},
    {path:'home',component:HomePageComponent,canActivate:[AuthGuard]},
    {path:'forbidden',component:AccessDeniedComponent},
    {path:'adminpanel',component:AdminpageComponent,canActivate:[AuthGuard],data:{permittedRoles:['Admin']}},
    {path:'employee-details',component:AllEmployeesComponent,canActivate:[AuthGuard],data:{permittedRoles:['Admin']}}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}