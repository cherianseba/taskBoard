import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from './../../models/task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        animate(500, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class TaskCardComponent implements OnInit {
  taskStatus = ['To Do', 'Blocked', 'In-Progress', 'Done'];
  taskAuthors = ['Not Assigned','Seba Cherian', 'Anna Mathew', 'Thomas Kuruvila', 'John Thomas', 'Leya Mathew'];
  @Input() task: Task;
  @Input() tileName: string;
  @Output() editTaskEmitter = new EventEmitter();
  @Output() deleteTaskEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  editTask(task: Task) {
    this.editTaskEmitter.emit(task);
  }

  deleteTask(task: Task) {
    this.deleteTaskEmitter.emit(task);
  }

}
