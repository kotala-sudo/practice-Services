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
      level: 'senior',
    },
    {
      name: 'Amy',
      level: 'freshman',
    },
    {
      name: 'Deion',
      level: 'junior',
    },
  ];

  onStudentAdded(newStudent: { name: string; level: string }) {
    this.students.push(newStudent);
  }

  onLevelChanged(updateInfo: { id: number; newLevel: string }) {
    this.students[updateInfo.id].level = updateInfo.newLevel;
  }
}
