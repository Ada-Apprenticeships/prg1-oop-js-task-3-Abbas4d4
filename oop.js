PRIORITY = { "LOW": 1, "MEDIUM": 3, "HIGH": 5, "URGENT": 7 };


function validInteger (value) { // returns true if value is integer otherwise returns false
  return /^\d+$/.test(value)
}  


function validatePriority(priority) {
  // Converts priority to an integer if it's a string and checks against valid PRIORITY levels
  return priority == 'LOW' || priority == 1 ? 1
  : priority == 'MEDIUM' || priority == 3 ? 3
  : priority == 'HIGH' || priority == 5 ? 5
  : priority == 'URGENT' || priority == 7 ? 7
  : 1
};



function todaysDate() {
  // Returns the current date and time in 'dd/mm/yyyy hh:mm:ss' format
  const now = new Date();
  const format = (num) => num.toString().padStart(2, '0');
  return `${format(now.getDate())}/${format(now.getMonth() + 1)}/${now.getFullYear()} ${format(now.getHours())}:${format(now.getMinutes())}:${format(now.getSeconds())}`;
}


class Task  {
  _added
  _title
  _priority

  constructor(title,priority){
    this._added = todaysDate()
    this._title = title
    this._priority = priority
  }

  get added(){
    return this._added
  }
  get title(){
    return this._title
  }
  get priority(){
    return this._priority
  }
  set priority(value){
    this._priority = validatePriority(value)

  }

  // (title, priority)
}


class ToDo {
  _tasks
  
  constructor(tasks){
    this.ListOfTasks = []
    this._tasks = tasks
  }

  add(Task){
    this.ListOfTasks.push(Task)
    return (this.ListOfTasks.length)
  }
  
  remove(title) {
    const initialLength = this.ListOfTasks.length
    this.ListOfTasks = this.ListOfTasks.filter(task => task.title != title)
    return this.ListOfTasks.length< initialLength    
  }


  list(priority = 0) {
    const priorityList = this.ListOfTasks
      .filter((task) => priority === 0 || task.priority === priority) //creates new arary excluding specified conditions
      .map(task => [task.added, task.title, task.priority]);   //map formats the arrangement of newly created array
    return priorityList
  }
  task(title) {
  if (this.ListOfTasks.find(task => task.title === title)) {
    return task
  }
  throw new Error(`Task '${title}' Not Found`)
  //   for (const task of this._tasks) {
  //     if (task.title === title) {
  //       return task;
  //     }
  //   } throw new Error(`Task '${title}' Not Found`);
  // }
}}








// Leave this code here for the automated tests
module.exports = {
  PRIORITY, validInteger, validatePriority, todaysDate, ToDo, Task,
}