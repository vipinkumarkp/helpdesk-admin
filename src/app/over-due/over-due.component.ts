import { Component } from '@angular/core';

@Component({
  selector: 'app-over-due',
  templateUrl: './over-due.component.html',
  styleUrls: ['./over-due.component.scss']
})
export class OverDueComponent {

  allData:any = [{
    id:2101,
    title:"Dummy",
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
    status:"ONHOLD"
  }]

  constructor(){}

  ngOnInit(): void {
    
  }

}
