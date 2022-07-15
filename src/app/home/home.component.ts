import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() myappc:Array<any> = [];
  @Input() myphone: string = "p";
  @Input() brand: string = "";
  @Input() imageurl: string = "hi";

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    
  }


  public phonelist:Array<any> = [];
  onAdd(imageurl:any){
    this.phonelist.push({Phone:this.myphone, Brand:this.brand, Image:this.imageurl})
    return console.log(this.imageurl, imageurl );
  }

  addPhone(){
    this.router.navigate(['/add-phone']);
  }

}
interface Dictionary {
  [ index: string ]: string
}