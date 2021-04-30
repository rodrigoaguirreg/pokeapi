import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-poke',
  templateUrl: './modal-poke.component.html',
  styleUrls: ['./modal-poke.component.css']
})
export class ModalPokeComponent implements OnInit {
  datso:any;
  constructor( public dialogRef: MatDialogRef<ModalPokeComponent>,@Inject(MAT_DIALOG_DATA) public data: {nombre: string,
    poder: string,
    imagen: string }) {

    }


  ngOnInit(): void {
  }
  aceptarDato(){
  }
  closeModal(){
    this.datso = document.getElementById("actualizaDato");
    let valor_dato = this.datso.value;
    console.log(this.datso.value)
    console.log(valor_dato.length)

    if(valor_dato.length >= 1) this.dialogRef.close(this.datso.value);
    else{
      this.dialogRef.close(this.data.poder)
    }
  }
}
