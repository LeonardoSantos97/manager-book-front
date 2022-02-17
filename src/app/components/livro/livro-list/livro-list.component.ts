import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.css']
})
export class LivroListComponent implements OnInit {

  ELEMENT_DATA: Livro[] = []
  FILTERED_DATA: Livro[] = []

  displayedColumns: string[] = ['id', 'titulo', 'autor', 'cliente', 'admin', 'dataCriacao', 'acoes'];
  dataSource = new MatTableDataSource<Livro>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: LivroService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Livro>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  // orderByStatus(status: any): void{
  //   let list: Livro[] = []
  //   this.ELEMENT_DATA.forEach(element => {
  //     if(element.status == status)
  //       list.push(element)
  //   });
  //   this.FILTERED_DATA = list;
  //   this.dataSource = new MatTableDataSource<Livro>(list);
  //   this.dataSource.paginator = this.paginator;
  // }


}
