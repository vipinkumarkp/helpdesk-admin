import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private dataArray: any[] = [];

  constructor() {}

  // Method to set the data
  setData(data: any[]): void {
    this.dataArray = data;
  }

  // Method to get the data
  getData(): any[] {
    return this.dataArray;
  }
}
