import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  name:any = '';

  Status:string[] = ['ON HOLD','CLOSED','OPEN'];

  nameData:any =[]



  isEdit = false;
  editIndex:number=0;
  Edit = false



  allData:any = []

  constructor(private ds:ServiceService){
    this.nameData = JSON.parse(localStorage.getItem('Dataing') || '[]')
  }

  ngOnInit(): void {
  }

  remove(i:any){
    this.allData.splice(i,1)
  }

  update(i:any){
    this.isEdit = true;
    this.editIndex = i;
    //to show the data on input box
    this.name = this.allData[i].name;
    this.Edit = true

  }

  add(){
    if(this.isEdit == false){
      this.allData.push({
        name: this.name,
      });
      console.log(this.allData);
    } else {
      this.allData[this.editIndex] = {
        name: this.name,
      }
      this.isEdit = false;
    }

    this.nameData.push({
      namedata: this.name
    })   
    const datastring = JSON.stringify(this.nameData)
    localStorage.setItem('Dataing',datastring)
  }
  cancel(){
    this.isEdit = false;
    this.Edit = false
  }
  show(){
    this.isEdit = true
  }

}
