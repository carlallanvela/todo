import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';

// Web Application Routes
const routes: Routes = [
  { path: '', component: LoginComponent}, // Default
  { path: 'login', component: LoginComponent},
  { path: 'welcome/:name', component: WelcomeComponent}, // Expects a parameter :name
  { path: 'todos', component: ListTodosComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'logout', component: LogoutComponent},
  { path: '**', component: ErrorComponent} // If not in routes, show error.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
