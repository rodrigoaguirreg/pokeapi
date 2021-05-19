import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { RegistroComponent } from './core/auth/registro/registro.component';
import { CapturadosComponent } from './modules/capturados/poke-capturados/capturados.component';
import { PokecardComponent } from './modules/home/pokecard/pokecard.component';
import { RegistrarComponent } from './modules/home/registrar/registrar.component';
import { PerfilComponent } from './modules/perfil/perfil.component';

const routes: Routes = [

  {path: '', pathMatch:'full', redirectTo:'login'},
  {path: 'home', component:PokecardComponent},
  {path: 'capturados', component: CapturadosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
