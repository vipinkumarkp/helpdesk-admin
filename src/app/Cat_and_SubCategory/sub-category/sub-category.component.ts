import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent {

  name:any = '';
  Subname:string = ''

  subnameData: any =[]

  Status:string[] = ['ON HOLD','CLOSED','OPEN']



  isEdit = false;
  editIndex:number=0;
  Edit = false

  SUBCATEGORY: any[] = []



  allData:any = []

  constructor(){
    this.SUBCATEGORY = JSON.parse(localStorage.getItem('Dataing') || '[]')

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
    this.Subname = this.allData[i].subname
    this.Edit = true

  }

  add(){
    if(this.isEdit == false){
      this.allData.push({
        name: this.name,
        subname: this.Subname
      });
      console.log(this.allData);
    } else {
      this.allData[this.editIndex] = {
        name: this.name,
        subname: this.Subname
      }
      this.isEdit = false;
    }
    this.subnameData.push({
      subname: this.Subname
    })
    const datastring = JSON.stringify(this.subnameData);
    localStorage.setItem('Dataings',datastring)
    
  }
  cancel(){
    this.isEdit = false;
    this.Edit = false
  }
  show(){
    this.isEdit = true
  }

}
