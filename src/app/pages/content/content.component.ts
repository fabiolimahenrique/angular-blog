import { POKEMONS } from 'src/app/data/mock-pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  foto: string = '';
  descricao: string = '';
  titulo: string = '';

  private id: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
       this.id = Number(value.get('id'))

    )
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: number) {
     const result = POKEMONS.filter( pokemon => pokemon.id == id)[0]
     this.titulo = result.titulo;
     this.descricao = result.descricao;
     this.foto = result.foto;
  }


}
