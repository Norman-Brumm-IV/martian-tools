import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ProductsbycategoryComponent } from './components/productsbycategory/productsbycategory.component';
import { CommentsComponent } from './components/comments/comments.component';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupContentsComponent } from './components/group-contents/group-contents.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    CategoriesComponent,
    NavbarComponent,
    SignupComponent,
    UserDashboardComponent,
    ProductsbycategoryComponent,
    CommentsComponent,
    GroupsComponent,
    GroupContentsComponent,
    ErrorMessageComponent,
    ProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
