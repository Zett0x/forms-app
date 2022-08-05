import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit{

  /* miFormulario:FormGroup=new FormGroup({
    'nombre':new FormControl('RTX 3060 12GB'),
    'precio':new FormControl(1500),
    'existencias':new FormControl(50),
  })
 */


  miFormulario:FormGroup=this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    precio:[0,[Validators.required, Validators.min(0)]],
    existencias:[0,[Validators.required, Validators.min(0)]]
  })
  constructor(private fb:FormBuilder) { }


  ngOnInit(): void {
    this.miFormulario.setValue({
      nombre:'',
      precio:0,
      existencias:0
    })
  }


  checkFormFieldErrors(field:string):boolean{
    return this.miFormulario.controls[field].errors && this.miFormulario.controls[field].touched || false;
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log('enviado')
    this.miFormulario.reset();
  }



}
