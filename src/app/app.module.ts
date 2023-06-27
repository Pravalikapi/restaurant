import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AdminComponent } from './admin/admin.component';
// import { MenuListComponent } from './menu/menu.component';
//import { MenuListComponent } from './menu-list/menu.component';
import { MenuComponent } from './menu/menu.component';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserComponent } from './user/user.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent },
 { path: 'menu', component: MenuComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MenuComponent,
    RestaurantComponent,
    UserComponent,
   
    
    //DashboardComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
