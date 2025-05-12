import { Component, Input, EventEmitter, Output, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

/* type User = {
  id: string;
  avatar: string;
  name: string;
} */

@Component({
  selector: 'app-user',
  //imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: false
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();
  //select = output<string>() // automatically creates event emitter
  @Input( {required: true }) selected!: boolean;

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
