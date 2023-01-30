import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CInputComponent } from './shared/components/c-input/c-input.component';
import { CSelectComponent } from './shared/components/c-select/c-select.component';
import { LoginComponent } from './pages/login/login.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserRegisterComponent } from './pages/users/user-register/user-register.component';
import { CatListComponent } from './pages/categury/cat-list/cat-list.component';
import { CatRegisterComponent } from './pages/categury/cat-register/cat-register.component';
import { GoodListComponent } from './pages/good/good-list/good-list.component';
import { GoodRegisterComponent } from './pages/good/good-register/good-register.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './shared/views/layout/layout.component';
import { LayoutNewComponent } from './shared/views/layout-new/layout-new.component';

@NgModule({
  declarations: [
    AppComponent,
    CInputComponent,
    CSelectComponent,
    LoginComponent,
    UserListComponent,
    UserRegisterComponent,
    CatListComponent,
    CatRegisterComponent,
    GoodListComponent,
    GoodRegisterComponent,
    HomeComponent,
    LayoutComponent,
    LayoutNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
