import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuListingComponent } from './menu-listing/menu-listing.component';
import { MenuItemListingComponent } from './menu-item-listing/menu-item-listing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateMenuItemComponent } from './create-menu-item/create-menu-item.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { RestaurantListingComponent } from './restaurant-listing/restaurant-listing.component';
import { AdminComponent } from './admin/admin.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
@NgModule({
  declarations: [
    AppComponent,
    MenuListingComponent,
    MenuItemListingComponent,
    LoginComponent,
    SignupComponent,
    CreateMenuItemComponent,
    CreateMenuComponent,
    CreateRestaurantComponent,
    RestaurantListingComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
