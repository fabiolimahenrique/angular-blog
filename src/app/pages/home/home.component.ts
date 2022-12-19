import { Component, OnInit } from '@angular/core';
import { POKEMONS } from 'src/app/data/mock-pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemons = POKEMONS;

  constructor() { }

  ngOnInit(): void {

  }

}
