import { Component } from '@angular/core';

@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.component.html',
  styleUrls: ['./knowledgebase.component.scss']
})
export class KnowledgebaseComponent {

  name:any = '';
  answer:any ='';

  isEdit = false;
  editIndex:number=0;
  Edit = false



  allData:any = []

  constructor(){

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
    this.answer = this.allData[i].answer
    this.Edit = true

  }

  add(){
    if(this.isEdit == false){
      this.allData.push({
        name: this.name,
        answer: this.answer
      });
      console.log(this.allData);
    } else {
      this.allData[this.editIndex] = {
        name: this.name,
        answer : this.answer
      }
      this.isEdit = false;
    }

    
    //to clear the input box
    
  }
  cancel(){
    this.isEdit = false;
    this.Edit = false
  }
  show(){
    this.isEdit = true
  }


}

