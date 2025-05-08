import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  //won't emit any data so type is void
  @Input({required:true}) userId!:string;
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  //instead of constructor based apporach we can use this too
  private tasksService = inject(TasksService)

  onCancel() {
    this.close.emit();
  }
  onSubmit() {
/*     this.add.emit({
      title: this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    })
 */
    this.tasksService.addTask ({
      title: this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    },this.userId)
    this.close.emit()
  }
}


