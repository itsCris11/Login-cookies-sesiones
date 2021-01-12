import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const appRoutes = [
    { path: 'inicio', component: AppComponent, pathMatch: 'full' },
    {​​​​​ path: 'home', component: HomeComponent, pathMatch: 'full' }​​​​​,
    {​​​​​ path: 'login', component: LoginComponent, pathMatch: 'full' }​​​​​,
    {​​​​​ path: 'register', component: RegisterComponent, pathMatch: 'full' }​​​​​
];

export const routing = RouterModule.forRoot(appRoutes);
@NgModule({​​​​​
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
}​​​​​)
export class AppRoutingModule {​​​​​ }​​​​​
