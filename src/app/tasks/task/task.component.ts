import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  //imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  standalone: false
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  //@Output() complete = new EventEmitter<string>();
  private tasksService = inject(TasksService);

  onCompleteTask() {
    //this.complete.emit(this.task.id);
    this.tasksService.removeTask(this.task.id);
  }
}
