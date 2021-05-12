import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PokeserviciosService } from 'src/app/services/pokeservicios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ListaPokem:Observable<any>;
  constructor(private router: Router, private pokeServices : PokeserviciosService) {
    this.ListaPokem = this.pokeServices.$capturados;
    console.log(this.ListaPokem,'here');
   }

  ngOnInit(): void {
  }
  home(){
    this.router.navigateByUrl('/home')
  }
  capturados(){
    this.router.navigateByUrl('/capturados')
  }
  // registrar(){
  //   this.router.navigateByUrl('/registrar')
  // }

  handleSearch(value: string){
    console.log(value);
  }

}
