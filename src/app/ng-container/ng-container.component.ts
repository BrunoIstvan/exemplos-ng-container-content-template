import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    { login: "Bruno Istvan", role: 'admin', birthday: new Date('04/18/1983') },
    { login: "Juliana dos Santos", role: 'admin', birthday: new Date('01/19/1987') },
    { login: "Letícia Santos", role: 'user', birthday: new Date('10/20/2013') },
    { login: "Sonia Maria Campos", role: 'user', birthday: new Date('09/22/1955') },
  ];

  constructor() { }

  ngOnInit() {
  }

}
