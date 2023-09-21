import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  name:any = '';
  asset:any = ''
  
  editIndex:number=0;
  isEdit = false;
  Edit = false

  CATEGORY:any[] = []
  SUBCATEGORY:any[] = []
  BRAND:any[]= ['option1', 'option2', 'option3']

  category: string = ''
  subcategory:string = ''
  brand: string = ''

  allData:any = [];

  

  constructor() {
    this.CATEGORY = JSON.parse(localStorage.getItem('Dataing') || '[]')
    this.SUBCATEGORY = JSON.parse(localStorage.getItem('Dataings') || '[]')

  }

  ngOnInit(): void {
  }

  add(){
    // this.allCode.push(this.Code);
    // this.allDesc.push(this.Desc);
    // !this.edit
    if(this.isEdit == false){
      this.allData.push({
        name: this.name,
        category: this.category,
        subcategory :  this.subcategory,
        brand: this.brand,
        assset: this.asset
      });
      console.log(this.allData);
    } else {
      this.allData[this.editIndex] = {
        name: this.name,
        category: this.category,
        subcategory :  this.subcategory,
        brand: this.brand,
        asset: this.asset
      }
      this.isEdit = false;
    }
  }

  remove(i:any){
    // this.allCode.map((item:any,index:any)=>{
    //   if(i == item){
    //     this.allCode.splice(index,1);
    //     alert('removed')
    //   }
    // })
    this.allData.splice(i,1); //splice(index,count)
  }

  update(i:any){
    this.isEdit = true;
    this.editIndex = i;
    //to show the data on input box
    this.name = this.allData[i].name;
    this.category = this.allData[i].category;
    this.subcategory = this.allData[i].subcategory;
    this.brand = this.allData[i].brand;
    this.asset = this.allData[i].asset;
  }

  cancel(){
    this.isEdit = false
    this.Edit = false
  }
  
  show(){
    this.isEdit = true
  }

}
