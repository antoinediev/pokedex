import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule, MatIconModule, MatButtonModule, MatGridListModule, MatCardModule, MatChipsModule } from '@angular/material';
import { PokemonDetailComponent } from '../pokemons/pokemon-detail/pokemon-detail.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    InfiniteScrollModule
  ],
  providers: [
    PokemonService
  ],
  exports: [
    PokemonListComponent
  ]
})
export class PokemonsModule { }
