import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { ValidatorService } from 'src/app/shared/validators/validator.service';
import { isEmailPattern, nombreApellidoPattern, noPuedesSerStrider } from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  get emailErrorMsg():string{
    const errors=this.miFormulario.get('email')?.errors;
    if(errors?.['required']){
      return 'Email obligatorio'
    }

    if(errors?.['pattern']){
      return 'El email no es válido'
    }
    if(errors?.['emailTomado']){
      return 'Este email ya está en uso'
    }


    return '';
  }


  miFormulario:FormGroup=this.fb.group({
    nombre:['',[Validators.required,Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email:['',[Validators.required,Validators.pattern(this.validatorService.isEmailPattern)], [this.emailValidator]],
    //email:['',[Validators.required,Validators.email]],
    username:['',[Validators.required,noPuedesSerStrider]],
    password:['',[Validators.required,Validators.minLength(6)]],
    password2:['',[Validators.required,Validators.minLength(6)]]

  },{
    validators:[this.validatorService.camposIguales('password','password2')]
  })

  constructor(
    private fb:FormBuilder,
    private validatorService:ValidatorService,
    private emailValidator:EmailValidatorService
    )
    {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'fran Ib',
      email:'zetto1514@gmail.com',
      username:'zettox',
      password:'123456',
      password2:'123456'
    })
  }

  checkFieldErrors(field:string){
    return this.miFormulario.controls[field].errors && this.miFormulario.controls[field].touched;
  }

  submitForm(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }




}
