import { Component } from '@angular/core';

@Component({
  selector: 'app-technicians',
  templateUrl: './technicians.component.html',
  styleUrls: ['./technicians.component.scss']
})
export class TechniciansComponent {

  allData:any = [
    {
      id:1001,
      name:"Gokul",
      category:121
    },
    {
      id:1002,
      name:"Rony",
      category:122
    },
    {
      id:1003,
      name:"Deepthi",
      category:123
    },
  ]

}
