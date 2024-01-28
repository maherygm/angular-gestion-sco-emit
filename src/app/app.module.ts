import { Component, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/pages/dashboard/dashboard.component';
import { HomeComponent } from './main/pages/home/home.component';
import { NavigationBarComponent } from './main/navigationBar/navigationBar.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './main/pages/login/login.component';
import { SigninComponent } from './main/pages/signin/signin.component';
import { NavigationDashboardComponent } from './main/pages/dashboard/layout/navigation-dashboard/navigation-dashboard.component';
import { ChartPageComponent } from './main/pages/dashboard/content/chart-page/chart-page.component';
import { ManagementPagesComponent } from './main/pages/dashboard/content/management-pages/management-pages.component';
import { SettingsPagesComponent } from './main/pages/dashboard/content/settings-pages/settings-pages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    DashboardComponent,
    NavigationBarComponent,
    LoginComponent,
    SigninComponent,
    NavigationDashboardComponent,
    ChartPageComponent,
    ManagementPagesComponent,
    SettingsPagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'dashboard', component: ChartPageComponent },
      { path: 'dashboard/chart', component: ChartPageComponent },
      { path: 'dashboard/management', component: ManagementPagesComponent },
      { path: 'dashboard/settings', component: SettingsPagesComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signin', component: SigninComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
