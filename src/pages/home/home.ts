import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NewPage } from '../new/new';
import { TasksService } from '../../services/task.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	tasks: {title: string}[] = [];

  constructor(public navCtrl: NavController, private tasksService: TasksService) {

  }

  ionViewWillEnter(){
  		this.tasks = this.tasksService.getTasks();
  }
  onLoadNewPlace() {
    this.navCtrl.push(NewPage);
  }

  removeTask(task){
 	let i;
    for(i = 0; i < this.tasks.length; i++) {
 
      if(this.tasks[i] == task){
        this.tasks.splice(i, 1);
      }
     }
  }
 
}
