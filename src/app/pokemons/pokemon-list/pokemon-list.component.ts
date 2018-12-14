import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @Output() changed = new EventEmitter<string>();

  pokemons;
  offset = 0;
  limit = 15;
  searchInput;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
  }

  onScroll() {
    this.pokemonService.getPokemonsWithParams(this.pokemons.offset + 15, this.pokemons.limit).subscribe( pokemons => {
      this.pokemons.limit = pokemons.limit;
      this.pokemons.offset = pokemons.offset;
      for (const pokemon of pokemons.data) {
        this.pokemons.data.push(pokemon);
      }
    });
  }

  onKey() {
    if (this.searchInput) {
      this.pokemonService.getPokemonWithSearch(this.searchInput).subscribe( pokemons => {
        this.pokemons = pokemons;
      });
    } else {
      this.getPokemons();
    }
  }

  getPokemons() {
    this.pokemonService.getPokemonsWithParams(this.offset, this.limit).subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }

  changePokemon(id) {
    this.changed.emit(id);
  }
}
