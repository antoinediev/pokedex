import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons;
  offset = 0;
  limit = 15;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemonsWithParams(this.offset, this.limit).subscribe(pokemons => {
      this.pokemons = pokemons;
      console.log(this.pokemons);
    });
  }

  onScroll() {
    this.pokemonService.getPokemonsWithParams(this.pokemons.offset + 15, this.pokemons.limit).subscribe( pokemons => {
      this.pokemons.limit = pokemons.limit;
      this.pokemons.offset = pokemons.offset;
      for (const pokemon of pokemons.data) {
        this.pokemons.data.push(pokemon);
      }
      //console.log(pokemons.data);
      //console.log(this.pokemons);
    });
  }

}
