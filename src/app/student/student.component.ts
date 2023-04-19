import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @Input() student: { name: string; year: string };
  @Input() id: number;
  @Output() yearChanged: EventEmitter<{ id: number; newYear: string }> =
    new EventEmitter<{ id: number; newYear: string }>();

  updateYearTo(year: string) {
    this.yearChanged.emit({ id: this.id, newYear: year });
    console.log(`Student's year change occured, the new value is ${year}`);
  }
  constructor() {}

  ngOnInit() {}
}
