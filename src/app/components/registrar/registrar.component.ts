import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  creds: Credenciais = {
    usuario: '',
    senha: ''
  }

  cliente: Cliente = {
    id:         '',
    nome:       '',
    usuario:      '',
    senha:      '',
    perfis:     [],
    dataCriacao: ''
  }

  usuario = new FormControl(null, Validators.required);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router) { }

  ngOnInit(): void { }

  // registrar() {     
  //   this.service.authenticate(this.creds).subscribe(resposta => {
  //     this.service.successfulLogin(resposta.headers.get('Authorization').substring(7));
  //     this.router.navigate([''])
  //   }, () => {
  //     this.toast.error('Usuário e/ou senha inválidos');
  //   })
  // }

  registrar(): void {
    this.service.registrar(this.cliente).subscribe(() => {
      this.toast.success('Usuário cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['clientes'])
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

  validaCampos(): boolean {
    return this.usuario.valid && this.senha.valid
  }

}