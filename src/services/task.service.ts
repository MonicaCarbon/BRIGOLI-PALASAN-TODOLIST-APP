export class TasksService {
	private tasks: {title: string}[] = [];

	addTask(task: {title: string}){
		this.tasks.push(task);
	}

	getTasks(){
		return this.tasks.slice();
	}
}