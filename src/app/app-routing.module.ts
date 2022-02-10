import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LivroCreateComponent } from './components/livro/livro-create/livro-create.component';
import { LivroListComponent } from './components/livro/livro-list/livro-list.component';
import { LivroReadComponent } from './components/livro/livro-read/livro-read.component';
import { LivroUpdateComponent } from './components/livro/livro-update/livro-update.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { AdminCreateComponent } from './components/admin/admin-create/admin-create.component';
import { AdminDeleteComponent } from './components/admin/admin-delete/admin-delete.component';
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
import { AdminUpdateComponent } from './components/admin/admin-update/admin-update.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },

      { path: 'admins',            component:   AdminListComponent },
      { path: 'admins/create',     component: AdminCreateComponent },
      { path: 'admins/update/:id', component: AdminUpdateComponent },
      { path: 'admins/delete/:id', component: AdminDeleteComponent },

      { path: 'clientes',            component:   ClienteListComponent },
      { path: 'clientes/create',     component: ClienteCreateComponent },
      { path: 'clientes/update/:id', component: ClienteUpdateComponent },
      { path: 'clientes/delete/:id', component: ClienteDeleteComponent },

      { path: 'livros',                       component:     LivroListComponent },
      { path: 'livros/create',                component:   LivroCreateComponent },
      { path: 'livros/update/:id',            component:   LivroUpdateComponent },
      { path: 'livros/read/:id',              component:     LivroReadComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }