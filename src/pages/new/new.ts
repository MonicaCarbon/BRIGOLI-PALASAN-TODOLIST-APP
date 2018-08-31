import { Component } from '@angular/core';
import { TasksService } from '../../services/task.service';

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {

  constructor(private tasksService: TasksService) {
  }

	onAddTask(value: {title: string}){
		this.tasksService.addTask(value);
	}

}
