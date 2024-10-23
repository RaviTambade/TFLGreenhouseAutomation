import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 
import { FrameworkConfigService } from './services/framework-config.service';
 
import { MenuService } from './services/menu.service';
 
import { SignInComponent } from './users/sign-in/sign-in.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';
 

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    
    SignInComponent,
    RegisterUserComponent
     
  ],
  providers: [
    FrameworkConfigService,
    
    MenuService
  ],
  exports: [
     
  ]
})
export class FwModule { }
