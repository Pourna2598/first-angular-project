import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  //only use inside this service
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2 hours',
    },
    {
      id: 't4',
      userId: 'u1',
      title: 'Apply for job',
      summary: 'Apply on Naukri',
      dueDate: '45 mins',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Do yoga',
      summary: 'Strecth all muscles',
      dueDate: '15 mins',
    },
    {
      id: 't3',
      userId: 'u6',
      title: 'Create any one journal',
      summary: 'Follow Pins',
      dueDate: '10 mins',
    },
  ];
  constructor(){
    const tasks = localStorage.getItem('tasks');

    if(tasks){
        this.tasks=JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks()
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks()
  }

  private saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks))
  }
}
