import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PokeserviciosService } from 'src/app/services/pokeservicios.service';

@Component({
  selector: 'app-cantidad-pokemons',
  templateUrl: './cantidad-pokemons.component.html',
  styleUrls: ['./cantidad-pokemons.component.css']
})
export class CantidadPokemonsComponent implements OnInit {
  pokemones = []
  @Input() Nuevospokemons = [];
  cantidadPokemons;
  cantidadAgua:number = 0;
  cantidadFuego:number = 0;
  cantidadTierra:number = 0;
  cantidadPlanta:number = 0;
  cantidadElectrico:number = 0;
  cantidadOtros: number = 0;
  @Output() enviarDato: EventEmitter<any[]> = new EventEmitter<any[]>();
  textohijo: string;
  constructor(private pokeService: PokeserviciosService) { }

  async ngOnInit(): Promise<any> {
    this.pokemones = await this.pokeService.getPokemones()
    this.cantidadPokemons = this.Nuevospokemons.find(valor =>{
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
    console.log(this.pokemones,'pokemons')
    console.log(this.Nuevospokemons,'hereaaa')
  }

  MostrarAgua(tipo){
    let filtrados = this.Nuevospokemons.filter(encontrado => (encontrado.tipo).toLowerCase() == `${tipo}`);
    this.enviarDato.emit(filtrados)
    console.log(this.enviarDato.emit(filtrados))
    console.log(filtrados)
    //return filtrados

  }

  // rodrigo = this.Nuevospokemons.find(valor =>{
  //                                       if((valor.tipo).toLowerCase() == "agua") ++this.cantidadAgua;
  //                                       else if((valor.tipo).toLowerCase() == "fuego") ++this.cantidadFuego;
  //                                       else if((valor.tipo).toLowerCase() == "tierra") ++this.cantidadTierra;
  //                                       else if((valor.tipo).toLowerCase() == "planta") ++this.cantidadPlanta;
  //                                       else if((valor.tipo).toLowerCase() == "electrico") ++this.cantidadElectrico;
  //                                       else{
  //                                         ++this.cantidadOtros;
  //                                       }
  //                                     }
  //                               );



  // this.cantidadPokemons = this.pokemons.find(valor =>{
  //   if((valor.tipo).toLowerCase() == "agua") ++this.cantidadAgua;
  //   else if((valor.tipo).toLowerCase() == "fuego") ++this.cantidadFuego;
  //   else if((valor.tipo).toLowerCase() == "tierra") ++this.cantidadTierra;
  //   else if((valor.tipo).toLowerCase() == "planta") ++this.cantidadPlanta;
  //   else if((valor.tipo).toLowerCase() == "electrico") ++this.cantidadElectrico;
  //   else{
  //     ++this.cantidadOtros;
  //   }
  // }
  //   );
  // console.log(this.cantidadAgua,'aquiii')
  // console.log(this.cantidadFuego,'aquiii')
  // console.log(this.cantidadTierra,'aquiii')
  // console.log(this.cantidadPlanta,'aquiii planta')
  // console.log(this.cantidadElectrico,'aquiii')
  // console.log(this.cantidadOtros,'aquiii')
}
