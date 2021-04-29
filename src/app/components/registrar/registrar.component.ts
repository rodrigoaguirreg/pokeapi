import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  nuevoPokemon = [{}];
  constructor( private http: HttpClient) { }

  ngOnInit(): void {
  }

  guardarDatos(){
    this.nombreInput = document.getElementById("nombrePokemonInput");
    this.nombreverdadero = this.nombreInput.value
    this.poderInput = document.getElementById("poderPokemonInput");
    this.poderverdadero = this.poderInput.value
    console.log(this.poderInput.value);
    this.imagenInput = document.getElementById("imagenPokemonInput");
    this.imagenverdadero = this.imagenInput.value
    console.log(this.imagenInput.value);
    this.nuevoPokemon.push(this.nombreInput.value, this.poderInput.value, this.imagenInput.value);
    console.log(this.nuevoPokemon);
    this.http.post<NuevoPokemon>('https://6078e33de7f4f50017184d9f.mockapi.io/api/v1/smiledu/pokemons', { nombre: this.nombreverdadero, tipo: this.poderverdadero, img: this.imagenverdadero}).subscribe(data =>{
      console.log(data);

     });
     this.nombreverdadero = '';
     this.poderverdadero = '';
     this.imagenverdadero = '';
     console.log(this.nombreverdadero);
     console.log(this.poderverdadero);
     console.log(this.imagenverdadero);
  }

}
interface NuevoPokemon {
  nombre: string;
  tipo: string;
  imagen: string;
}
