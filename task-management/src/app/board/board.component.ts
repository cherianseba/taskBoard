import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from '../shared/tasks.service';
import { Task } from './../models/task';
import { NewTaskComponent } from './task-card/new-task/new-task.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  taskList: Task[] = [];
  public tiles = [
    { text: 'To Do', cols: 1, rows: 1, color: '#CFD8DC', titlecolor: '#03A9F4', addNewTask: true },
    { text: 'Blocked', cols: 1, rows: 1, color: '#CFD8DC', titlecolor: '#ff6b68', addNewTask: false },
    { text: 'In-Progress', cols: 1, rows: 1, color: '#CFD8DC', titlecolor: '#d066e2', addNewTask: false },
    { text: 'Done', cols: 1, rows: 1, color: '#CFD8DC', titlecolor: '#349050', addNewTask: false },
  ];

  constructor(private taskService: TasksService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTasks();
  }

  // get all tasks
  getTasks() {
    this.taskService.getTasks().subscribe((tasks: Task[]) =>
      this.taskList = tasks,
      (err: any) => console.log(err)
    );
    this.tiles.forEach(tile => {
      tile.rows = this.taskList.length * 0.4;
    });
  }

  // Add a new task or edit an existing task by taskId
  addOrEditTask(taskToEdit?: Task) {
    let dialogRef = this.dialog.open(NewTaskComponent, {
      panelClass: 'add-task-container',
      data: taskToEdit ? taskToEdit : null
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!taskToEdit) {
          // If the operation is to add a new task then push the newly created task object in to original task array
          this.taskList.push({
            taskId: this.taskList.length > 0 ? this.taskList[this.taskList.length - 1].taskId + 1 : 1,
            taskName: result.taskName,
            taskDescription: result.taskDescription,
            taskAuthor: 'Not Assigned',
            taskStatus: 'To Do'
          });
        } else {
          // If the operation is to edit an existing task then update original task array with edited task object
          this.taskList.forEach((task: Task) => {
            if (task.taskId == taskToEdit.taskId) {
              task.taskName = result.taskName;
              task.taskDescription = result.taskDescription;
            }
          });
          this.taskList = [...this.taskList];
          this.tiles.forEach(tile => {
            tile.rows = this.taskList.length * 0.4;
          });
        }
      }
    });
  }

  // delete a task by taskId
  onDeleteTask(taskToBeDeleted: Task) {
    this.taskList = this.taskList.filter(task => task.taskId != taskToBeDeleted.taskId);
  }
  
  // Clear all completed tasks
  clearAllCompletedTasks() {
    this.taskList = this.taskList.filter((task: Task) => task.taskStatus != 'Done');
  }

}
