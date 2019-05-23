import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

// Web Application Routes
const routes: Routes = [
  // Default, implement route guard service.
  { path: '', component: LoginComponent }, 
  { path: 'login', component: LoginComponent },
  // Expects a parameter :name, implements route guard service.
  { path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]}, 
  // Implements route guard service.
  { path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService]},
  { path: 'menu', component: MenuComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'logout', component: LogoutComponent },
  // If not in routes, show error.
  { path: '**', component: ErrorComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
