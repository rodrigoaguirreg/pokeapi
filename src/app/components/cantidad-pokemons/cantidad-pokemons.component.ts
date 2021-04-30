import { Component, Input, OnInit } from '@angular/core';
import { PokeserviciosService } from 'src/app/services/pokeservicios.service';

@Component({
  selector: 'app-cantidad-pokemons',
  templateUrl: './cantidad-pokemons.component.html',
  styleUrls: ['./cantidad-pokemons.component.css']
})
export class CantidadPokemonsComponent implements OnInit {
  pokemons = []
  @Input() Nuevospokemons = [];
  cantidadPokemons;
  cantidadAgua:number = 0;
  cantidadFuego:number = 0;
  cantidadTierra:number = 0;
  cantidadPlanta:number = 0;
  cantidadElectrico:number = 0;
  cantidadOtros: number = 0;

  constructor(private pokeService: PokeserviciosService) { }

  async ngOnInit(): Promise<any> {
    this.pokemons = await this.pokeService.getPokemones()
    this.cantidadPokemons = this.pokemons.find(valor =>{
      if((valor.tipo).toLowerCase() == "agua") ++this.cantidadAgua;
      else if((valor.tipo).toLowerCase() == "fuego") ++this.cantidadFuego;
      else if((valor.tipo).toLowerCase() == "tierra") ++this.cantidadTierra;
      else if((valor.tipo).toLowerCase() == "planta") ++this.cantidadPlanta;
      else if((valor.tipo).toLowerCase() == "electrico") ++this.cantidadElectrico;
      else{
        ++this.cantidadOtros;
      }
    }
      );
    console.log(this.cantidadAgua,'aquiii')
    console.log(this.cantidadFuego,'aquiii')
    console.log(this.cantidadTierra,'aquiii')
    console.log(this.cantidadPlanta,'aquiii planta')
    console.log(this.cantidadElectrico,'aquiii')
    console.log(this.cantidadOtros,'aquiii')

  }


}
