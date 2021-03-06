import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRouterModule } from './app-router.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr'

//UI Imports
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule  } from '@angular/material/card'

//components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {MatDatepickerModule} from '@angular/material/datepicker';


//services
import { UserService } from './user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from 'src/app/auth/auth.guard'
import { GridModule } from '@progress/kendo-angular-grid';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { PertEmployeesComponent } from './pert-employees/pert-employees.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    AccessDeniedComponent,
    AdminpageComponent,
    AddDetailsComponent,
    SignInComponent,
    InitialPageComponent,
    AllEmployeesComponent,
    PertEmployeesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,FlexLayoutModule,MatFormFieldModule,MatSelectModule,MatCardModule,MatDatepickerModule,
    AppRouterModule,
    ButtonsModule,ToastrModule.forRoot({
      progressBar: true
    }),
    InputsModule,MatToolbarModule, LabelModule, DropDownsModule,ReactiveFormsModule,FormsModule,HttpClientModule, GridModule
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
  },AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
