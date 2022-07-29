import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BasicosComponent } from '../basicos/basicos.component';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent  implements OnInit {

  @ViewChild('myForm') myForm!:NgForm;
  ngOnInit(): void {

  }
  constructor(){

  };

  save(): void {
    console.log(this.myForm)
  }

  formFieldIsValid(field:string):boolean{

    return this.myForm?.form.controls[field]?.status==='INVALID' && this.myForm?.form.controls[field]?.touched

  }




}
