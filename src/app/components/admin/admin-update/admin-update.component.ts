import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {

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
    private router:          Router,
    private route:   ActivatedRoute
   
  ) { }

  ngOnInit(): void {
    this.admin.id = this.route.snapshot.paramMap.get('id');
    this.findById();
   }

   findById(): void {
    this.service.findById(this.admin.id).subscribe(resposta => {
      resposta.perfis = []
      this.admin = resposta;
    })
  }

  update(): void {
    this.service.create(this.admin).subscribe(() => {
      this.toast.success('Usuário atualizado com sucesso', 'Update');
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
