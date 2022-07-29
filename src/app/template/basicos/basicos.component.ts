import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface FormFields{
  product:string,
  price:number,
  stocks:number

}

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})


export class BasicosComponent implements OnInit {


  @ViewChild('myForm') myForm!:NgForm;

  initForm:FormFields={
    product:'',
    price:0,
    stocks:0
  }
  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log('Posteo correcto');
    this.myForm.resetForm(this.initForm
      );
  }

  formFieldIsValid(field:string):boolean{

    return this.myForm?.form.controls[field]?.status==='INVALID' && this.myForm?.form.controls[field]?.touched

  }

}
