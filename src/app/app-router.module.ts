import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component'

const routes:Routes =[
    {path:'', component:HomePageComponent},
    {path:'register',component:RegisterComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}