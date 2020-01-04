import { Component } from '@angular/core';
import {Student} from './student';

@Component({
  selector: 'my-app',
  template: `
      <div>
        <button (click)="onAddStudent()">Klick mich!</button>
          <ul>
            <li *ngFor="let student of students; let i=index">
            {{student.firstname}}
            {{student.lastname}}
            <button (click)="onDeleteStudent(i)">entfernen</button>
            </li>
          </ul>
      </div>
      `

})
export class AppComponent  {
  students=[
   new Student("Erik","Müller"),
   new Student("Tanja","Muster"),
   new Student("Fritz","Walther")
  ];

  onDeleteStudent(index:number){
    this.students.splice(index,1);
  }

  onAddStudent(){
   this.students.push(
    new Student("Neuer Student","Nachname")
  );

 }

 
}

