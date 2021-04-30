import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PokeserviciosService } from 'src/app/services/pokeservicios.service';
import { ModalDismissReasons, NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'
import {MatDialog} from '@angular/material/dialog';
import { ModalPokeComponent } from '../modal-poke/modal-poke.component';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { RegistrarComponent } from '../registrar/registrar.component';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.css']
})

export class PokecardComponent implements OnInit {

  closeResult: string;
  pokemons = [];
  @Input() filter_valor: string;
  @Input() modal_pokemon: string;
  constructor(private pokeService: PokeserviciosService,
              public dialog : MatDialog, private http: HttpClient,
              private snackbar: MatSnackBar) { }

  async ngOnInit(): Promise<any> {
    this.pokemons = await this.pokeService.getPokemones()
    this.search.valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => this.searchEmitter.emit(value))
  }


    capturarPok(pokemon){
      let pokemonCapturadoNombre = pokemon.nombre;
      let pokemonCapturadoPoder = pokemon.tipo;
      let pokemonCapturadoImagen = pokemon.img;
      console.log(pokemonCapturadoNombre);
      console.log(pokemonCapturadoPoder);
      console.log(pokemonCapturadoImagen);
      this.http.post<PokemonCapturado>('https://6078e33de7f4f50017184d9f.mockapi.io/api/v1/smiledu/pokedex', { nombre: pokemonCapturadoNombre, tipo: pokemonCapturadoPoder, img: pokemonCapturadoImagen}).subscribe(data =>{
      console.log(data)
      this.snackbar.open('Pokemon Capturado', 'Cancelar', {
        duration: 3000
      });
     });
    }

    verPokemon(pokemon){
      const dialogRef = this.dialog.open(ModalPokeComponent,{
        width:'400px',
        data : {
          nombre: pokemon.nombre,
          poder: pokemon.tipo,
          imagen: pokemon.img
        }

      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        pokemon.tipo = result;
      });
    }
9
    registrarPokemon(){
      const dialogReferen = this.dialog.open(RegistrarComponent,{
        width:'500px'
      })
      dialogReferen.afterClosed().subscribe(result => {
        console.log(result);
        this.pokemons.unshift({nombre: result[0], tipo: result[1], img: result[2]});
         console.log(this.pokemons);
      })
    }

    search = new FormControl('')

    @Output('search') searchEmitter = new EventEmitter<string>();
  }


interface PokemonCapturado{
  nombre: string;
  tipo: string;
  imagen: string;
}
