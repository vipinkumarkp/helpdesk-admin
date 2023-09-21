import { Component } from '@angular/core';




@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  // faqs = [
  //   { question: 'How do I create an account?', answer: 'To create an account, click on the "Sign Up" button and provide your email and password.' },
  //   { question: 'Can I change my password?', answer: 'Yes, you can change your password in the "Account Settings" section after logging in.' }
  //   // Add more FAQ items as needed
  // ];

  // editingFaq: any = null; // For tracking the FAQ being edited


  // newFaq = { question: '', answer: '' };

  // addFAQ() {
  //   if (this.newFaq.question && this.newFaq.answer) {
  //     this.faqs.push(this.newFaq);
  //     this.newFaq = { question: '', answer: '' };
  //   }
  // }
  // editFAQ(faq: any) {
  //   this.editingFaq = faq; // Set the FAQ being edited
  // }

  // saveEdit(faq: any) {
  //   this.editingFaq = null; // Clear the editing status
  // }

  // deleteFAQ(faq: any) {
  //   const index = this.faqs.indexOf(faq);
  //   if (index !== -1) {
  //     this.faqs.splice(index, 1);
  //   }
  // }

  
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