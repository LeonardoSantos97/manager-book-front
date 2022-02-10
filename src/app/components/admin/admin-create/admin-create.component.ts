import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  admin: Admin = {
    id:         '',
    nome:       '',
    usuario:      '',
    senha:      '',
    perfis:     [],
    dataCriacao: ''
  }

  nome: FormControl =  new   FormControl(null, Validators.minLength(2));
  usuario: FormControl = new FormControl(null, Validators.required);
  senha: FormControl = new   FormControl(null, Validators.minLength(3));


  constructor(
    private service: AdminService,
    private toast:    ToastrService,
    private router:          Router
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.admin).subscribe(() => {
      this.toast.success('Usuário cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['admins'])
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

  addPerfil(perfil: any): void {
    if(this.admin.perfis.includes(perfil)) {
      this.admin.perfis.splice(this.admin.perfis.indexOf(perfil), 1);
    } else {
      this.admin.perfis.push(perfil);
    }
    
  }
  
  validaCampos(): boolean {
    return this.nome.valid 
     && this.usuario.valid && this.senha.valid
  }
}
