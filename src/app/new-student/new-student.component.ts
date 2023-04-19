import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css'],
})
export class NewStudentComponent implements OnInit {
  @Output() newStudentAdded: EventEmitter<{ name: string; year: string }> =
    new EventEmitter<{ name: string; year: string }>();

  onCreateStudent(studentName: string, studentYear: string) {
    this.newStudentAdded.emit({
      name: studentName,
      year: studentYear,
    });
    console.log(
      `Student's year change occured, the new year is ${studentYear}`
    );
  }

  constructor() {}

  ngOnInit() {}
}
