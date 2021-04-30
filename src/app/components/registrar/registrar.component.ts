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

  miFormulario = new FormGroup({
    nombrePokemon: new FormControl('', Validators.required),
    poderPokemon: new FormControl('', Validators.required),
    imagenPokemon: new FormControl('', Validators.required),

  })

  guardarDatos(){
    this.nombreInput = document.getElementById("nombrePokemonInput");
    this.nombreverdadero = this.nombreInput.value

    this.poderInput = document.getElementById("poderPokemonInput");
    this.poderverdadero = this.poderInput.value

    this.imagenInput = document.getElementById("imagenPokemonInput");
    this.imagenverdadero = this.imagenInput.value


        // .push(this.nombreInput.value, this.poderInput.value, this.imagenInput.value);
    this.http.post<NuevoPokemon>('https://6078e33de7f4f50017184d9f.mockapi.io/api/v1/smiledu/pokemons', { nombre: this.nombreverdadero, tipo: this.poderverdadero, img: this.imagenverdadero}).subscribe(data =>{
      console.log(data);

     });
     this.nuevoPokemon.push(this.nombreInput.value, this.poderInput.value, this.imagenInput.value);

     console.log(this.nuevoPokemon,'nuevopokemon');
     this.dialogRef.close( this.nuevoPokemon)

  }

}
interface NuevoPokemon {
  nombre: string;
  tipo: string;
  imagen: string;
}
