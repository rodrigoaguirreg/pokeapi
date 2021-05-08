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
import { Button } from 'selenium-webdriver';
import { CantidadPokemonsComponent } from '../cantidad-pokemons/cantidad-pokemons.component';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.css']
})

export class PokecardComponent implements OnInit {


  closeResult: string;
  pokemons = [];
  pokemonsCapturados = [];
  pokemoness;
  desabilitar = 'false';
  @Input() filter_valor: string;
  @Input() modal_pokemon: string;
  constructor(private _pokeService: PokeserviciosService,
              private _dialog : MatDialog, private _http: HttpClient,
              private _snackbar: MatSnackBar) { }

  async ngOnInit(): Promise<any> {
    this.pokemons = await this._pokeService.getPokemones()
    this.pokemonsCapturados = await this._pokeService.getPokemonsCapturados();
    this.search.valueChanges
    .pipe(
      //hacer que funcione
      debounceTime(3000)
    )
    .subscribe(value => this.searchEmitter.emit(value));

// console.log(this.filtrando.MostrarAgua('agua'));
  }

    capturarPok(pokemon){
      let pokemonCapturadoNombre = pokemon.nombre;
      let pokemonCapturadoPoder = pokemon.tipo;
      let pokemonCapturadoImagen = pokemon.img;
      let boton = document.querySelector("button")
      let p = this.pokemonsCapturados.find( encontrado => encontrado.nombre == pokemonCapturadoNombre);
      if(p){
        boton.disabled = true
      }
      else{
        this._http.post<PokemonCapturado>('https://6078e33de7f4f50017184d9f.mockapi.io/api/v1/smiledu/pokedex', { nombre: pokemonCapturadoNombre, tipo: pokemonCapturadoPoder, img: pokemonCapturadoImagen}).subscribe(data =>{
        console.log(data)
        this._snackbar.open('Pokemon Capturado', 'Cancelar', {
          duration: 3000
        });
        });

      }
  }

    verPokemon(pokemon){
      const dialogRef = this._dialog.open(ModalPokeComponent,{
        width:'400px',
        data : {
          nombre: pokemon.nombre,
          poder: pokemon.tipo,
          imagen: pokemon.img
        },
        disableClose:true

      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        pokemon.tipo = result;
      });
    }
9
    registrarPokemon(){
      const dialogReferen = this._dialog.open(RegistrarComponent,{
        width:'500px',disableClose:true
      })
      dialogReferen.afterClosed().subscribe(result => {
        console.log(result,'here');
        if(result.length >= 1){
          this.pokemons.unshift({nombre: result[0], tipo: result[1], img: result[2]});
        }
         console.log(this.pokemons.length);
      })
    }


    CambiarDatosArray(mensaje){
      console.log(mensaje,'mensajemsnasej')
      this.pokemons = mensaje;
      // let ep = this.pokemons.find(encontrar => encontrar.nombre == mensaje)
      // console.log(ep,'aquiiiiiiiiiiiiiiiiiii')
      // this.pokemons = this.pokemons.filter(encontrado => (encontrado.tipo).toLowerCase() == mensaje.tipo);
      // console.log(this.pokemons)
    }
    editarPokemon(pokemon){
      // const dialogReferen = this._dialog.open(EditarComponent,{
      //   width:'500px',disableClose:true
      // })
      const dialogReferen = this._dialog.open(EditarComponent,{
        width:'500px',
        data:{
          id:pokemon.id
        }
        ,disableClose:true
      })
      dialogReferen.afterClosed().subscribe(result => {
        if(result.length){
          this.pokemons[pokemon.id - 1].nombre = result.nombre
          this.pokemons[pokemon.id - 1].tipo = result.tipo
          this.pokemons[pokemon.id - 1].img = result.img
        }
        console.log(result,'here');
         console.log(this.pokemons,'afterclose');
      })


      console.log('rodrigo')
    }

    search = new FormControl('')

    @Output('search') searchEmitter = new EventEmitter<string>();
  }


interface PokemonCapturado{
  nombre: string;
  tipo: string;
  imagen: string;
}
