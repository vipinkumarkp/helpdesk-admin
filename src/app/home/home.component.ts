import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  textareaInput: any = 'ng add @angular/material'
  textareaInput1: any = 'npm install echarts --save'


  constructor(){}

  ngOnInit(): void {
    Aos.init();
  }

}
