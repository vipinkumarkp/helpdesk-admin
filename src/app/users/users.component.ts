import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  selectedOption: string = ''; // Variable to store the selected option
  showElement: boolean = false;

  name:any = ''
  id:any = ''
  email:any = ''
  phone:any=''
  pswd:any=''
  dob:any=''
  doj:any=''
  dept:any =''
  Name:any =''
  

  users: any[] = ['Employee', 'Technician'];
  User: any = '';
  Status:any[] = ['Active', 'Inactive'];
  status:any = '';
  Edit = false


  editIndex:number=0;
  isEdit = false;

  allData:any = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  add(){
    
    if(this.isEdit == false){
      this.allData.push({
        name: this.name,
        id: this.id,
        email:this.email,
        phone:this.phone,
        user:this.User,
        pswd:this.pswd,
        dob:this.dob,
        doj:this.doj,
        status:this.status,
        dept:this.dept,
        Name:this.Name
      });
      console.log(this.allData);
    } else {
      this.allData[this.editIndex] = {
        name: this.name,
        id: this.id,
        email:this.email,
        phone:this.phone,
        user:this.User,
        pswd:this.pswd,
        dob:this.dob,
        doj:this.doj,
        status:this.status,
        dept:this.dept,
        Name:this.Name
      }
      this.isEdit = false;
    }
    //to clear the input box
    this.name = '';
    this.id = '';
    this.email ='';
    this.phone = '';
    this.User = '';
    this.pswd = '';
    this.dob = '';
    this.doj = '';
    this.status = '';
    this.dept = '';
    this.Name = ''
  }

  remove(i:any){
   
    this.allData.splice(i,1); //splice(index,count)
  }

  update(i:any){
    this.isEdit = true;
    this.editIndex = i;
    //to show the data on input box
    this.name = this.allData[i].name;
    this.id = this.allData[i].id;
    this.email = this.allData[i].email;
    this.phone = this.allData[i].phone;
    this.User = this.allData[i].user;
    this.pswd = this.allData[i].pswd;
    this.dob = this.allData[i].dob;
    this.doj = this.allData[i].doj;
    this.status = this.allData[i].status,
    this.dept=  this.allData[i].dept,
    this.Name =   this.allData[i].Name,

    this.Edit = true
  }

  onOptionChange(event: any) {
    this.selectedOption = event.target.value;
    // Check the selected option and set the showElement variable accordingly
    this.showElement = this.selectedOption === 'Employee';
  }
  show(){
    this.isEdit = true
  }
  cancel(){
    this.isEdit = false;
    this.Edit = false
  }

}
