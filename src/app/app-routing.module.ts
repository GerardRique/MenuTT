import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuItemListingComponent } from '../app/menu-item-listing/menu-item-listing.component';
import { MenuListingComponent } from '../app/menu-listing/menu-listing.component';
import { LoginComponent } from '../app/login/login.component';
import { SignupComponent } from '../app/signup/signup.component';
import { CreateMenuComponent } from '../app/create-menu/create-menu.component';
import { CreateMenuItemComponent } from '../app/create-menu-item/create-menu-item.component';
import { AdminComponent } from '../app/admin/admin.component';
import { CreateRestaurantComponent } from '../app/create-restaurant/create-restaurant.component';
import { RestaurantListingComponent } from '../app/restaurant-listing/restaurant-listing.component';

const routes: Routes = [
  {
    path: 'menu-listing',
    component: MenuListingComponent
  },
  {
    path: 'menu-item-listing',
    component: MenuItemListingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'create-menu',
    component: CreateMenuComponent
  },
  {
    path: 'create-menu-item',
    component: CreateMenuItemComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: RestaurantListingComponent },
      { path: 'create-restaurant', component: CreateRestaurantComponent }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
