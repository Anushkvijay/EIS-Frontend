import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent  } from "./sign-in/sign-in.component";

const routes:Routes =[
    {path:'', component:HomePageComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:SignInComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}