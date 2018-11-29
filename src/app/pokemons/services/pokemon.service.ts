import { Pokemon } from './../../models/pokemon.model';
import { PagedData } from './../../models/paged-data.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PagedData<Pokemon>> {
    return this.http.get<PagedData<Pokemon>>(environment.pokedexApiUrl + '/pokemons');
  }

  getPokemon(id): Observable<{}> {
    return this.http.get(environment.pokedexApiUrl + '/pokemons/' + id);
  }

  getPokemonsWithParams(offset, limit): Observable<PagedData<Pokemon>> {
    return this.http.get<PagedData<Pokemon>>(environment.pokedexApiUrl + '/pokemons?offset=' + offset + '&limit=' + limit);
  }
 }
