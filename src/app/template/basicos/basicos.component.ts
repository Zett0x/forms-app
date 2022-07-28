import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {


  @ViewChild('myForm') myForm!:NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.myForm)
  }

  formFieldIsValid(field:string):boolean{

    return this.myForm?.form.controls[field]?.status==='INVALID' && this.myForm?.form.controls[field]?.touched

  }

}
