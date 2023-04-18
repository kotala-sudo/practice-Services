import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css'],
})
export class NewStudentComponent implements OnInit {
  @Output() newStudentAdded: EventEmitter<{ name: string; level: string }> =
    new EventEmitter<{ name: string; level: string }>();

  onCreateStudent(studentName: string, studentLevel: string) {
    this.newStudentAdded.emit({
      name: studentName,
      level: studentLevel,
    });
    console.log(`A level change occured, the new level is ${studentLevel}`);
  }

  constructor() {}

  ngOnInit() {}
}
