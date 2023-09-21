import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {

  // Ticekt creation values from view
  Title:any = '';
  Description:any = '';
  Raised_by:any = '';
  Created_by:any = '';
  Comment:any = '';

  Assigned_to:any=''
  Updated_at:any =''
  Resloved_at:any=''
  Closed_at:any=''
  Closed_by:any=''
  Ticket_Status:any=''
  Changed_by:any=''
  
  // ticket edit values from view
  // date:any = '';
  // type:any = '';
  // location:any = '';
  // prob_desc:any = '';
  // contact:any = '';
  // remarks:any = '';
  // user:any = '';
  // status:any = '';
  // Status:string[] = ['ON HOLD','CLOSED','OPEN'];

  //message from customer to show on view and response
  message:any = '';
  text_area:any = '';

  Status:string[] = ['ON HOLD','CLOSED','OPEN']


  Edit = false
  isEdit = false;
  Show = false
  show1 = false
  editIndex:number=0;


  //solid data to show the table
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
  }]

  constructor(){

  }

  ngOnInit(): void {
  }

  remove(i:any){
    this.allData.splice(i,1)
  }

  update(i:any){
    this.isEdit = true;
    this.Edit = true;
    this.show1 = true
    this.editIndex = i;
    //to show the data on input box
    this.Assigned_to = this.allData[i].assigned_to;
    this.Updated_at = this.allData[i].updated_at;
    this.Resloved_at = this.allData[i].resolved_by;
    this.Closed_at = this.allData[i].Closed_at;
    this.Closed_by = this.allData[i].closed_by;
    this.Changed_by = this.allData[i].changed_by;
    this.Ticket_Status = this.allData[i].ticket_status;

    this.Title = this.allData[i].title;
    this.Description = this.allData[i].description;
    this.Raised_by = this.allData[i].raised_by;
    this.Created_by = this.allData[i].created_by;
    this.Comment = this.allData[i].comment;
  }

  add(){
    if(this.isEdit == false){
      this.allData.push({
        title: this.Title,
        description: this.Description,
        raised_by:this.Raised_by,
        created_by:this.Created_by,
        comment:this.Comment
      });
      console.log(this.allData);
    } else {
      this.allData[this.editIndex] = {
        title: this.Title,
        description: this.Description,
        raised_by:this.Raised_by,
        created_by:this.Created_by,
        comment:this.Comment
      
    }
    
    
  }
  this.isEdit = false;
      this.Edit = false;
      this.Show = false;
    //to clear the input box
    this.Title=''
    this.Description=''
    this.Raised_by=''
    this.Created_by=''
    this.Comment=''
}
add_(){
  if(this.isEdit == false){
    this.allData.push({
      title: this.Title,
        description: this.Description,
        raised_by:this.Raised_by,
        created_by:this.Created_by,
        comment:this.Comment,
      assigned_to: this.Assigned_to,
      updated_at: this.Updated_at,
      resolved_by:this.Resloved_at,
      Closed_at:this.Closed_at,
      closed_by:this.Closed_by,
      changed_by:this.Changed_by,
      ticket_status:this.Ticket_Status,
    });
    console.log(this.allData);
  } else {
    this.allData[this.editIndex] = {
      title: this.Title,
        description: this.Description,
        raised_by:this.Raised_by,
        created_by:this.Created_by,
        comment:this.Comment,
      assigned_to: this.Assigned_to,
      updated_at: this.Updated_at,
      resolved_by:this.Resloved_at,
      Closed_at:this.Closed_at,
      closed_by:this.Closed_by,
      changed_by:this.Changed_by,
      ticket_status:this.Ticket_Status,
    
  }
  
  
}
this.isEdit = false;
    this.Edit = false;
    this.Show = false;
    this.show1 = false
  //to clear the input box
  this.Title=''
  this.Description=''
  this.Raised_by=''
  this.Created_by=''
  this.Comment=''
  this.Assigned_to=''
  this.Updated_at =''
  this.Resloved_at=''
  this.Closed_at=''
  this.Closed_by=''
  this.Ticket_Status=''
  this.Changed_by=''
}
  cancel(){
    this.isEdit = false;
    this.Edit = false;
    this.Show = false;
    this.show1= false
  }
  
  show(){
    this.Edit = true;
    this.Show = true;
  }

}