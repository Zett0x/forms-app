import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BasicosComponent } from '../basicos/basicos.component';


interface Persona{
  nombre:string;
  favoritos:Favorito[];
}
interface Favorito{
  id:number;
  nombre:string

}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent extends BasicosComponent implements OnInit {



  nuevoJuego:string='';
  persona:Persona={
    nombre:'fran',
    favoritos:[
      {
        id:1,
        nombre:'Metal Gear'
      },
      {
        id:2,
        nombre:'Dead Stranding'
      }
    ]
  }


  @ViewChild('myForm') override myForm!:NgForm;
  override ngOnInit(): void {


  }
  constructor(){
    super();
  };

  addGame(){
    const nuevoFavorito:Favorito={
      id:this.persona.favoritos.length+1,
      nombre:this.nuevoJuego
    }
    this.nuevoJuego='';
    this.persona.favoritos.push({...nuevoFavorito});

  }


  deleteFavourite(index:number){
    this.persona.favoritos.splice(index,1);
  }





}
