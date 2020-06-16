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
import { MatCardModule } from '@angular/material/card'

//components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { SignInComponent } from './sign-in/sign-in.component';

//services
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { InitialPageComponent } from './initial-page/initial-page.component';


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
    InitialPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,FlexLayoutModule,MatFormFieldModule,MatSelectModule,MatCardModule,
    AppRouterModule,
    ButtonsModule,ToastrModule.forRoot({
      progressBar: true
    }),
    InputsModule,MatToolbarModule, LabelModule, DropDownsModule,ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
