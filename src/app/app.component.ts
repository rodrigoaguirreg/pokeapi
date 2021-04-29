import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokeapi';
  handleSearch(value:string){
    this.filter_value = value;

  }
  filter_value = ''
}
