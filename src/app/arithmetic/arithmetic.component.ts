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

    let courses = this.http.get<any>("http://localhost:54405/api/plus/10/9").subscribe(data => {
      console.log(data)
    })
  }

  add() {
    let courses = this.http.get<any>("http://localhost:54405/api/plus/4/90").subscribe(data => {
      console.log(data)
    })
  }

  subtract() {
    let courses = this.http.get<any>("http://localhost:54405/api/minus/4/9").subscribe(data => {
      console.log(data)
    })
  }

  multiply() {
    let courses = this.http.get<any>("http://localhost:54405/api/multiply/4/9").subscribe(data => {
      console.log(data)
    })
  }

  divide() {
    let courses = this.http.get<any>("http://localhost:54405/api/divide/4/9").subscribe(data => {
      console.log(data)
    })
  }

  result() {
    let calculation_text = document.getElementById("calcText").innerHTML

    let add_index = calculation_text.indexOf("+") 
    let multiply_index = calculation_text.indexOf("x") 
    let divide_index = calculation_text.indexOf("/") 
    let minus_index = calculation_text.indexOf("-")

    if (add_index > -1) {
      let operand_one = Number(calculation_text.slice(0,add_index))
      let operand_two = Number(calculation_text.slice(add_index+1))

    }

    if (multiply_index > -1) {
      let operand_one = Number(calculation_text.slice(0,multiply_index))
      let operand_two = Number(calculation_text.slice(multiply_index+1))
    }

    if (divide_index > -1) {
      let operand_one = Number(calculation_text.slice(0,divide_index))
      let operand_two = Number(calculation_text.slice(divide_index+1))

    }

    if (minus_index > -1) {
      let operand_one = Number(calculation_text.slice(0,minus_index))
      let operand_two = Number(calculation_text.slice(minus_index+1))

    }

  }

  clear() {
    document.getElementById("calcText").innerHTML = ""
  }

  pressed(key: any) {
    let keys = String(key)
    let already_text = document.getElementById("calcText").innerHTML
    let length = already_text.length


    if (already_text === "") {
      if (keys === "/" || keys == "-" || keys == "+" || keys == "x") {

      } else {
        document.getElementById("calcText").innerHTML += key
      }
    } else {

      if (already_text.indexOf("+") > -1 || already_text.indexOf("x") > -1 || already_text.indexOf("/") > -1 || already_text.indexOf("-") > -1) {
        if (keys === "/" || keys == "-" || keys == "+" || keys == "x") {
          alert("You cant use more than two operands")
        } else {
          let last_alpha = already_text[length - 1]
          if (last_alpha === "/" || last_alpha == "-" || last_alpha == "+" || last_alpha == "x") {
            if (keys === "/" || keys == "-" || keys == "+" || keys == "x") {
            } else {
              document.getElementById("calcText").innerHTML += keys
            }
          } else {
            document.getElementById("calcText").innerHTML += keys
          }
        }
      }
      else{
        let last_alpha = already_text[length - 1]
        if (last_alpha === "/" || last_alpha == "-" || last_alpha == "+" || last_alpha == "x") {
          if (keys === "/" || keys == "-" || keys == "+" || keys == "x") {
          } else {
            document.getElementById("calcText").innerHTML += keys
          }
        } else {
          document.getElementById("calcText").innerHTML += keys
        }
      }





    }
  }
}