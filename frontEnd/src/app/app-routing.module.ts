import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ProductsbycategoryComponent } from './components/productsbycategory/productsbycategory.component';
import { CommentsComponent } from './components/comments/comments.component';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupContentsComponent } from './components/group-contents/group-contents.component';
import { SignupComponent } from './components/signup/signup.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ProductsService } from './service/products/products.service';
import { ProductPageComponent } from './components/product-page/product-page.component';

const routes: Routes = [
  {path: 'categories',component: CategoriesComponent},
  {path: '',redirectTo: '/categories', pathMatch: 'full'},
  {path: 'login',component: LoginComponent},
  {path: 'dashboard', component: UserDashboardComponent},
  {path: 'products/all/:id', component: ProductsbycategoryComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'groups/:userID', component: GroupsComponent},
  {path: 'group_contents/:userID/:groupID', component: GroupContentsComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'error', component: ErrorMessageComponent},
  {path: 'products/id/:id', component: ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
