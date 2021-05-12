import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapturadosComponent } from './modules/capturados/poke-capturados/capturados.component';
import { PokecardComponent } from './modules/home/pokecard/pokecard.component';
import { RegistrarComponent } from './modules/home/registrar/registrar.component';

const routes: Routes = [

  {path: '', pathMatch:'full', redirectTo:'home'},
  {path: 'home', component:PokecardComponent},
  {path: 'capturados', component: CapturadosComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: '**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
