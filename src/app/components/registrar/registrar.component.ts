import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  nombreInput;
  poderInput;
  imagenInput;
  nombreverdadero;
  poderverdadero;
  imagenverdadero;
  nuevoPokemon = [];
  constructor( private http: HttpClient, public dialogRef: MatDialogRef<RegistrarComponent>) { }

  ngOnInit(): void {
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




  guardarDatos(nombre,poder,imagen){
    this.nombreverdadero = nombre;

    this.poderverdadero = poder;

    this.imagenverdadero = imagen;

    this.http.post<NuevoPokemon>('https://6078e33de7f4f50017184d9f.mockapi.io/api/v1/smiledu/pokemons', { nombre: this.nombreverdadero, tipo: this.poderverdadero, img: this.imagenverdadero}).subscribe(data =>{
      console.log(data);
     });
     this.nuevoPokemon.push(this.nombreverdadero, this.poderverdadero, this.imagenverdadero);

     console.log(this.nuevoPokemon,'nuevopokemon');
     this.dialogRef.close( this.nuevoPokemon)

  }

}
interface NuevoPokemon {
  nombre: string;
  tipo: string;
  imagen: string;
}
