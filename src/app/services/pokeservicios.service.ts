import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokecardComponent } from '../modules/home/pokecard/pokecard.component';
import { mapTo, map, catchError  } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';



@Injectable({
  providedIn: 'root'
})
export class PokeserviciosService {
  baseUrl = environment.baseUrl;
  private readonly capturados = new BehaviorSubject<any>([]);
  readonly $capturados = this.capturados.asObservable();

  constructor(private http: HttpClient,private _dialog : MatDialog) { }

  getPokemonsUrl(index) {
    return this.http.get(`${this.baseUrl}/pokemons/${index}`);
  }
  capturarPokemon(pokemon) {
    let arrCapturados = this.capturados.value;
    arrCapturados.push(pokemon);
    this.capturados.next(arrCapturados);
  }
  getPokemones(): Promise<any> {
    return this.http.get(`${this.baseUrl}/pokemons`).pipe(map(response => response)).pipe( catchError((error) => of(error || 404)) ).toPromise();
  }
  getPokemonsCapturados(): Promise<any> {
    return this.http.get("https://6078e33de7f4f50017184d9f.mockapi.io/api/v1/smiledu/pokedex").pipe(map(response => response)).pipe( catchError((error) => of(error || 404)) ).toPromise();
  }

  modalRegistarProkemon(moduloAbrir){
    return this._dialog.open(moduloAbrir,{
      width:'500px',disableClose:true
    })
  }

  updatePokemons(pokemon:PokemonInterface,id):Observable<any> {
    return this.http.put(`${this.baseUrl}/pokemons/${id}`,pokemon)
  }


}

interface PokemonInterface {
  nombre: string;
  tipo: string;
  img: string;
}
