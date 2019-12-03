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
    let courses = this.http.get("http://localhost:54405/api/plus/4/4").forEach(data=>{
      console.log(data)
    })
  }

  getResult() {
  }

}
