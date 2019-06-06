import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'detalhes/:id', loadChildren: './pages/detalhes/detalhes.module#DetalhesPageModule' },
  { path: 'detalhes', loadChildren: './pages/detalhes/detalhes.module#DetalhesPageModule' },
   { path: 'detalhescontato', loadChildren: './pages/detalhescontato/detalhescontato.module#DetalhescontatoPageModule' },
  { path: 'ajuda', loadChildren: './pages/ajuda/ajuda.module#AjudaPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
  { path: 'editar-perfil', loadChildren: './pages/editar-perfil/editar-perfil.module#EditarPerfilPageModule' },
  { path: 'editar-perfil/:id', loadChildren: './pages/editar-perfil/editar-perfil.module#EditarPerfilPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
