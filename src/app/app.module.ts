import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokecardComponent } from './modules/home/pokecard/pokecard.component';
import { HeaderComponent } from './shared/header/header.component';
import { CapturadosComponent } from './modules/capturados/poke-capturados/capturados.component';
import { SearchPipe } from './pipes/search.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalPokeComponent } from './modules/home/modal-poke/modal-poke.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrarComponent } from './modules/home/registrar/registrar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ModalConfirmacionComponent } from './modules/capturados/modal-confirmacion/modal-confirmacion.component';
import { CantidadPokemonsComponent } from './shared/cantidad-pokemons/cantidad-pokemons.component';
import { EditarComponent } from './modules/home/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    PokecardComponent,
    HeaderComponent,
    CapturadosComponent,
    SearchPipe,
    ModalPokeComponent,
    RegistrarComponent,
    ModalConfirmacionComponent,
    CantidadPokemonsComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgbModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
