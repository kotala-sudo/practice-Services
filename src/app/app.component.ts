import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  students = [
    {
      name: 'Bob',
      year: 'senior',
    },
    {
      name: 'Amy',
      year: 'freshman',
    },
    {
      name: 'Deion',
      year: 'junior',
    },
  ];

  onStudentAdded(newStudent: { name: string; year: string }) {
    this.students.push(newStudent);
  }

  onYearChanged(updateInfo: { id: number; newYear: string }) {
    this.students[updateInfo.id].year = updateInfo.newYear;
  }
}
