import { Component } from '@angular/core';

@Component({
  selector: 'app-un-assigned',
  templateUrl: './un-assigned.component.html',
  styleUrls: ['./un-assigned.component.scss']
})
export class UnAssignedComponent {
  allData:any = [{
    id:2101,
    tech_cat:"Procurement",
    desc:"Memory Module",
    raised:"123",
    created:"231",
  },
  {
    id:2102,
    tech_cat:"Procurement",
    desc:"New Monitor",
    raised:"321",
    created:"312",
  },
  {
    id:2103,
    tech_cat:"Procurement",
    desc:"New Desktop",
    raised:"423",
    created:"234",
  }]

  constructor(){}

  ngOnInit(): void {
    
  }



}
