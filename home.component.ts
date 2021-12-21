import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo!: string;
  public texto!: string;

  classToDiv = {};

  constructor() {
    this.classToDiv = {
      'text-success': true
    };
   }

  ngOnInit () {
    this.titulo! = 'Game Mania';
    this.texto! = "O novo E-commerce gamer, exclusivo para você!";
  }

}
