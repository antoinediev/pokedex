import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemonId;
  pokemon;

  constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.pokemonId = this.activatedRoute.snapshot.paramMap.get('pokemonId');
    this.pokemonService.getPokemon(this.pokemonId).subscribe( pokemon => {
      this.pokemon = pokemon;
     // this.playCry(this.pokemon.id);
    });
  }

  /*playCry(id) {
    const audio = new Audio();
    audio.src = '../../../assets/audio/' + id + '.mp3';
    audio.load();
    audio.play();
  }*/




}
