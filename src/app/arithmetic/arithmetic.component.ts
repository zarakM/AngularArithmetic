import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _ from 'lodash';


@Component({
  selector: 'app-arithmetic',
  templateUrl: './arithmetic.component.html',
  styleUrls: ['./arithmetic.component.css']
})



export class ArithmeticComponent implements OnInit {
  constructor(private http: HttpClient) { }
  ngOnInit() {    

    let courses = this.http.get<any>("http://localhost:54405/api/plus/10/9").subscribe(data=>{
      console.log(data)
    })
  }

  add() {
    let courses = this.http.get<any>("http://localhost:54405/api/plus/4/9").subscribe(data=>{
      console.log(data)
    })
  }

  subtract() {
    let courses = this.http.get<any>("http://localhost:54405/api/minus/4/9").subscribe(data=>{
      console.log(data)
    })
  }

  multiply() {
    let courses = this.http.get<any>("http://localhost:54405/api/multiply/4/9").subscribe(data=>{
      console.log(data)
    })
  }

  divide() {
    let courses = this.http.get<any>("http://localhost:54405/api/divide/4/9").subscribe(data=>{
      console.log(data)
    })
  }

}
