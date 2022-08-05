import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  //miFormulario... this.fb...
  //nombre ''  required minlength 3
  miFormulario:FormGroup=this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]],
    favoritos:this.fb.array([
      ['Metal Gear',Validators.required],
      ['Dead Stranding',Validators.required]
    ], Validators.required)
  })

  nuevoFavorito:FormControl=this.fb.control('',Validators.required);


  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  checkFormFieldErrors(field:string):boolean{
    return this.miFormulario.controls[field].errors && this.miFormulario.controls[field].touched || false;
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;

    }

  }
  borrar(index:number){

    this.favoritosArr.removeAt(index);

  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid)return;

    //this.favoritosArr.push(new FormControl(this.nuevoFavorito.value,Validators.required));
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value,Validators.required))
    this.nuevoFavorito.reset();
  }

}
