import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokeserviciosService } from 'src/app/services/pokeservicios.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  pokemons = [];
  nuevoPokemon = [];
  constructor( private http: HttpClient,
               public dialogRef: MatDialogRef<EditarComponent>,
               private _pokeService: PokeserviciosService,
               @Inject(MAT_DIALOG_DATA) public data: {id: string}
    ) { }

  async ngOnInit(): Promise<any> {
    this.pokemons = await this._pokeService.getPokemones()
  }

  //formbuilder

  miFormulario = new FormGroup({
    nombrePokemon: new FormControl('', Validators.required),
    poderPokemon: new FormControl('', Validators.required),
    imagenPokemon: new FormControl('', Validators.required),

  })
  get nombrePokemonGet() {return this.miFormulario.get('nombrePokemon')}
  get poderPokemonGet() {return this.miFormulario.get('poderPokemon')}
  get imagenPokemonGet() {return this.miFormulario.get('imagenPokemon')}




  editarDatos(nombreInput,poderInput,imagenInput){

    const pokemonEditado = {nombre: nombreInput, tipo: poderInput, img: imagenInput}
    this._pokeService.updatePokemons(pokemonEditado,this.data.id).subscribe(pokemones => {
      const nombreEditar = pokemones ? this.pokemons.findIndex(encontrado => encontrado.id == pokemones.id): -1;
      if(nombreEditar > -1){
        this.pokemons[nombreEditar] = pokemones;

      }
    })
     this.dialogRef.close(pokemonEditado)

  }

}
interface NuevoPokemon {
  nombre: string;
  tipo: string;
  imagen: string;
}
