import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BasicosComponent } from '../basicos/basicos.component';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent extends BasicosComponent implements OnInit {


  @ViewChild('myForm') override myForm!:NgForm;
  override ngOnInit(): void {


  }
  constructor(){
    super();
  };





}
