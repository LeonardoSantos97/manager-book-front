import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Imports para componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

// Componentes do projeto
// import { NavComponent } from './components/nav/nav.component';
// import { HomeComponent } from './components/home/home.component';
// import { HeaderComponent } from './components/header/header.component';
// import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
// import { LoginComponent } from './components/login/login.component';
// import { ToastrModule } from 'ngx-toastr';
// import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
// import { AdminCreateComponent } from './components/admin/admin-create/admin-create.component';
// import { NgxMaskModule } from 'ngx-mask';
// import { AdminUpdateComponent } from './components/admin/admin-update/admin-update.component';
// import { AdminDeleteComponent } from './components/admin/admin-delete/admin-delete.component';
// import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
// import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
// import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
// import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
// import { LivroListComponent } from './components/livro/livro-list/livro-list.component';
// import { LivroCreateComponent } from './components/livro/livro-create/livro-create.component';
// import { LivroUpdateComponent } from './components/livro/livro-update/livro-update.component';
// import { LivroReadComponent } from './components/livro/livro-read/livro-read.component';



@NgModule({
  declarations: [
    AppComponent,
    // NavComponent,
    // HomeComponent,
    // HeaderComponent,
    // AdminListComponent,
    // LoginComponent,
    // AdminCreateComponent,
    // AdminUpdateComponent,
    // AdminDeleteComponent,
    // ClienteCreateComponent,
    // ClienteDeleteComponent,
    // ClienteListComponent,
    // ClienteUpdateComponent,
    // LivroListComponent,
    // LivroCreateComponent,
    // LivroUpdateComponent,
    // LivroReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
    NgxMaskModule.forRoot()
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }