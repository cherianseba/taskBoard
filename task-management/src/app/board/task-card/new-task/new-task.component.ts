import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  newTaskForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<NewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.initializeNewTaskForm();
    if (this.data) this.populateTaskForm();
  }

  initializeNewTaskForm() {
    this.newTaskForm = new FormGroup({
      taskName: new FormControl('', Validators.required),
      taskDescription: new FormControl('', Validators.required)
    })
  }

  populateTaskForm() {
    this.newTaskForm.setValue({
      taskName: this.data.taskName,
      taskDescription: this.data.taskDescription
    })
  }

  cancelTaskCreation() {
    this.dialogRef.close();
  }

  addNewTask() {
    this.dialogRef.close(this.newTaskForm.value);
  }

}
