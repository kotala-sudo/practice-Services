import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @Input() student: { name: string; level: string };
  @Input() id: number;
  @Output() levelChanged: EventEmitter<{ id: number; newLevel: string }> =
    new EventEmitter<{ id: number; newLevel: string }>();

  updateLevelTo(level: string) {
    this.levelChanged.emit({ id: this.id, newLevel: level });
    console.log(`A status change occured, the new status is ${level}`);
  }
  constructor() {}

  ngOnInit() {}
}
