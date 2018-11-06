import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indexh',
  templateUrl: './indexh.component.html',
  styleUrls: ['./indexh.component.css']
})
export class IndexhComponent implements OnInit {

  form: string ='anterior';


  constructor() { }

    onChange(type:string){
      this.form = type;
    }

  ngOnInit() {
  }

}
