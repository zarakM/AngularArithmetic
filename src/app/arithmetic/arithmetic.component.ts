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

  }

  result() {
    let apiUrl = "http://localhost:54405/api/"

    let calculation_text = document.getElementById("calcText").innerHTML

    let add_index = calculation_text.indexOf("+")
    let multiply_index = calculation_text.indexOf("x")
    let divide_index = calculation_text.indexOf("/")
    let minus_index = calculation_text.indexOf("-")

    if (add_index > -1) {
      let operand_one = Number(calculation_text.slice(0, add_index))
      let operand_two = Number(calculation_text.slice(add_index + 1))

     this.http.get<any>(apiUrl+"plus/"+operand_one+"/"+operand_two).subscribe(data => {
        console.log(data)
      })

    }

    if (multiply_index > -1) {
      let operand_one = Number(calculation_text.slice(0, multiply_index))
      let operand_two = Number(calculation_text.slice(multiply_index + 1))

      this.http.get<any>(apiUrl+"multiply/"+operand_one+"/"+operand_two).subscribe(data => {
        console.log(data)
      })
    }

    if (divide_index > -1) {
      let operand_one = Number(calculation_text.slice(0, divide_index))
      let operand_two = Number(calculation_text.slice(divide_index + 1))

      this.http.get<any>(apiUrl+"divide/"+operand_one+"/"+operand_two).subscribe(data => {
        console.log(data)
      })
    }

    if (minus_index > -1) {
      let operand_one = Number(calculation_text.slice(0, minus_index))
      let operand_two = Number(calculation_text.slice(minus_index + 1))

      this.http.get<any>(apiUrl+"minus/"+operand_one+"/"+operand_two).subscribe(data => {
        console.log(data)
      })
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
      else {
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