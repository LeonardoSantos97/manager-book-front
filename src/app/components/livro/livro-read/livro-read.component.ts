import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

  livro: Livro = {
    titulo:      '',
    admin:     '',
    cliente:     '',
    nomeCliente: '',
    nomeAdmin: '',
  }

  constructor(
    private livroService: LivroService,
    private toastService:    ToastrService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.livro.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.livroService.findById(this.livro.id).subscribe(resposta => {
      this.livro = resposta;
    }, ex => {
      this.toastService.error(ex.error.error);
    })
  }


  
}