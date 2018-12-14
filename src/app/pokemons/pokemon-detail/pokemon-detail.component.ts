import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges {

  @Input() pokemonId;
  pokemon$;

  constructor(private pokemonService: PokemonService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.pokemon$ = this.pokemonService.getPokemon(this.pokemonId);
  }




}
