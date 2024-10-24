
import {Task} from '../objects/task';

export interface ITaskService {
  getAllTasks():Task[];
  getTasks(assignedTo:string):Task[] ;
  getTask(taskId:number):Task;
  getTasksByDuration(from:Date, to:Date):Task[];
  getTasksByCategory(category:string):Task[];
  updateTask(task:Task);
  cancelTask(task:Task);
  newTask();
}
