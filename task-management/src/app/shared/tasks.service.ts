import { Injectable } from '@angular/core';
import { TaskData as constant } from './mockData';
import { Task } from './../models/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(constant.taskList);
  }
}
