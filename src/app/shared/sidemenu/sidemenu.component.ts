import { Component } from '@angular/core';

interface MenuItem{
  text:string,
  route:string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent  {

  templateMenu:MenuItem[]=[
    {
      text:'basicos',
      route:'./template/basicos'
    },
    {
      text:'dinamicos',
      route:'./template/dinamicos'
    },
    {
      text:'switches',
      route:'./template/switches'
    }
  ]

  reactiveMenu:MenuItem[]=[
    {
      text:'basicos',
      route:'./reactive/basicos'
    },
    {
      text:'dinamicos',
      route:'./reactive/dinamicos'
    },
    {
      text:'switches',
      route:'./reactive/switches'
    }
  ]



}
