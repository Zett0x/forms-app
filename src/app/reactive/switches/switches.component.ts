import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent {

  persona={
    genero:'',
    notificaciones:false
  }

  miFormulario:FormGroup=this.fb.group({
    genero:['M',Validators.required],
    notificaciones:[false],
    condiciones:[false,Validators.requiredTrue]
  })


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.miFormulario.reset({...this.persona,condiciones:false});

    this.miFormulario.valueChanges.subscribe(({condiciones,...rest})=>{
      this.persona=rest;
    })

  }
  constructor(private fb:FormBuilder ){ }


  guardar(){

    const formValue={...this.miFormulario.value};
    delete formValue.condiciones;
    this.persona=formValue;
  }



}
