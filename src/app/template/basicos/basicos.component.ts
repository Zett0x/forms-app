import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  save(myForm:NgForm){
    console.log(myForm)
  }

  formFieldIsValid(field:string,myForm:NgForm):boolean{

    if(myForm.form.controls[field]?.status==='INVALID' && myForm.form.controls[field]?.touched)
      return false;

    return true;

  }

}
