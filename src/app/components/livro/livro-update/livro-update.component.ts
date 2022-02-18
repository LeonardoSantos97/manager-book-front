import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Livro } from 'src/app/models/livro';
import { Cliente } from 'src/app/models/cliente';
import { Admin } from 'src/app/models/admin';
import { LivroService } from 'src/app/services/livro.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {

  livro: Livro = {
    titulo:      '',
    // admin:     '',
    // cliente:     '',
    // nomeCliente: '',
    // nomeAdmin: '',
    autor: '',
  }

  clientes: Cliente[] = []
  admins: Admin[] = []

  titulo:     FormControl = new FormControl(null, [Validators.required]);
  // admin:    FormControl = new FormControl(null, [Validators.required]);
  // cliente:    FormControl = new FormControl(null, [Validators.required]);
  autor:    FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private livroService: LivroService,
    private clienteService: ClienteService,
    private adminService: AdminService,
    private toastService:    ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.findAllClientes();
    this.findAllAdmins();
  }

  update(): void {
    this.livroService.update(this.livro).subscribe(resposta => {
      this.toastService.success('Livro atualizado com sucesso', 'Atualizar Livro');
      this.router.navigate(['livros']);
    }, ex => {
      console.log(ex);
      
      this.toastService.error(ex.error.error);
    })
  }

  findAllClientes(): void {
    this.clienteService.findAll().subscribe(resposta => {
      this.clientes = resposta;
    })
  }

  findAllAdmins(): void {
    this.adminService.findAll().subscribe(resposta => {
      this.admins = resposta;
    })
  }
  

}