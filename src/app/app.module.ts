import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router'
import {HttpModule} from '@angular/http';
//import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DefaultpageComponent } from './defaultpage/defaultpage.component';
import { EqualValidatorDirective } from './equal-validator.directive';
import { FamilyComponent } from './family/family.component';
import { PassValidatorDirective } from './pass-validator.directive';
import { NavigationComponent } from './navigation/navigation.component';

const routes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'hill',component:DemoComponent},
  {path:'family',component:FamilyComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:DefaultpageComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DemoComponent,
    RegisterComponent,
    HomeComponent,
    DefaultpageComponent,
    EqualValidatorDirective,
    FamilyComponent,
    PassValidatorDirective,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,HttpModule,
    RouterModule.forRoot(routes),FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
