import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { PokeserviciosService } from 'src/app/services/pokeservicios.service';
import { PokecardComponent } from '../../home/pokecard/pokecard.component';
import { ModalConfirmacionComponent } from '../modal-confirmacion/modal-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, map } from 'rxjs/operators';


@Component({
  selector: 'app-capturados',
  templateUrl: './capturados.component.html',
  styleUrls: ['./capturados.component.css']
})
export class CapturadosComponent implements OnInit {
  pokemons = [];
  constructor(private pokeService: PokeserviciosService, private http: HttpClient, public dialog : MatDialog,
    private snackbar: MatSnackBar) {

   }

   async ngOnInit(): Promise<any> {
    this.pokemons = await this.pokeService.getPokemonsCapturados()
  }

  elimarPokemonCapturado(pokemo){
    let pokemonCapturadoId = pokemo.id;
    this.dialog.open(ModalConfirmacionComponent,{
      data: `Estas seguro de liberar al pokemon?`
    }).afterClosed().subscribe((confirmado: Boolean)=>{

        if(confirmado) {
          if(this.pokemons.length > 1){
            this.http.delete(`https://6078e33de7f4f50017184d9f.mockapi.io/api/v1/smiledu/pokedex/${pokemonCapturadoId}`).subscribe({
              next: data => {
                console.log(data,' salio csm')
              },
              error: error=> {
                console.log(error, "error aqui csm")
              }
            })
            this.snackbar.open('Pokemon Liberado', 'Cancelar', {
              duration: 3000
            });
            this.pokemons = this.pokemons.filter(p => p.id != pokemonCapturadoId);
            // let p = this.pokemons.find(element => element.id == pokemonCapturadoId);
            // console.log(this.pokemons.indexOf(p));
            // this.pokemons.splice(this.pokemons.indexOf(p), 1);
          } else{
              this.snackbar.open('La cantidad de pokemons no puede ser menor a 1', 'Cancelar', {
                duration: 3000
              });
            }
        } else {
            this.snackbar.open('No se liberó el pokemon', 'Cancelar', {
              duration: 3000
            });
          }
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
}
