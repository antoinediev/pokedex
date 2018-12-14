import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule, MatIconModule, MatButtonModule, MatGridListModule, MatCardModule, MatChipsModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PokemonDetailComponent } from '../pokemons/pokemon-detail/pokemon-detail.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokedexComponent } from './pokedex/pokedex.component';

@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent, PokedexComponent],
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
    InfiniteScrollModule,
    MatSidenavModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    PokemonService
  ],
  exports: [
    PokemonListComponent
  ]
})
export class PokemonsModule { }
