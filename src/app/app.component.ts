import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'browsephone';
  phone:string = "";
  brand:string = "";
  image:string = "";

  phoneList:Array<any> = [];

  doChange(value:string){
    console.warn(value)
  }
  getForm(phone:string, brand:string, image:string){
    this.phoneList.push({phone:phone, brand:brand, image:image})
    console.warn(phone,brand,image, this.phoneList)
  }
}
