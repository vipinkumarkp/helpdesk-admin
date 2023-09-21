import { Component } from '@angular/core';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent {

  allData:any = [{
    id:2101,
    title:"Anything",
    prob_desc:"Memory Module",
    raised_by:"Alvin",
    assigned_to:"123",
    created_by:"312",
    updated_at:"12/06/2023",
    resolved_by:"12/06/2023",
    Closed_at:"12/06/2023",
    reasone:"noting",
    closed_by:"211",
    ticket_status:"OPEN",
    changed_by:"211",
    comment:"need help",
    status:"RECENTLY ADDED"
  }]

  constructor(){}

  ngOnInit(): void {
    
  }

}
