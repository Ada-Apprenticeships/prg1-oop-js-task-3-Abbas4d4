PRIORITY = { "LOW": 1, "MEDIUM": 3, "HIGH": 5, "URGENT": 7 };


function validInteger (value) { // returns true if value is integer otherwise returns false
  return /^\d+$/.test(value)
}  

// Validates the priority level of a task by converting textual or numeric priority to the corresponding integer val
function validatePriority(priority) {
  return priority == 'LOW' || priority == 1 ? 1
  : priority == 'MEDIUM' || priority == 3 ? 3
  : priority == 'HIGH' || priority == 5 ? 5
  : priority == 'URGENT' || priority == 7 ? 7
  : 1
};



function todaysDate() {
  // Returns the current date and time in 'dd/mm/yyyy hh:mm:ss' format
  const now = new Date();
  const format = (num) => num.toString().padStart(2, '0');  //add zero in front for single digit values
  return `${format(now.getDate())}/${format(now.getMonth() + 1)}/${now.getFullYear()} ${format(now.getHours())}:${format(now.getMinutes())}:${format(now.getSeconds())}`;
}


class Task  {
  _added;
  _title;
  _priority;

  constructor(title, priority) {
    this._added = todaysDate();          // Stores the date and time the task was added
    this._title = title;                 // Stores the task title
    this._priority = validatePriority(priority); // Sets the task priority using validation function
  }

  // Getter for task's added date
  get added() {
    return this._added;
  }

  // Getter for task's title
  get title() {
    return this._title;
  }

  // Getter for task's priority
  get priority() {
    return this._priority;
  }

  // Setter for task's priority with validation
  set priority(value) {
    this._priority = validatePriority(value);
  }
}

class ToDo {
  _tasks
  
  constructor(tasks){
    this.ListOfTasks = []   //empty array to store task object
    this._tasks = tasks
  }

  add(Task){
    this.ListOfTasks.push(Task)
    return (this.ListOfTasks.length)
  }
  
  // Removes task by title. returning true if removed, otherwise false
  remove(title) {
    const initialLength = this.ListOfTasks.length
    this.ListOfTasks = this.ListOfTasks.filter(task => task.title != title)
    return this.ListOfTasks.length< initialLength    
  }


  // Lists tasks with an optional priority filter (0); returns tasks with added date, title, and priority
  list(priority = 0) {
    const priorityList = this.ListOfTasks
      .filter((task) => priority === 0 || task.priority === priority) //creates new arary excluding specified conditions
      .map(task => [task.added, task.title, task.priority]);   //map formats the arrangement of newly created array
    return priorityList
  }

  // Find and return a specific task by title. error if not found.
  task(title) {
  if (this.ListOfTasks.find(task => task.title === title)) {
    return task
  }
  throw new Error(`Task '${title}' Not Found`)
}}





// Leave this code here for the automated tests
module.exports = {
  PRIORITY, validInteger, validatePriority, todaysDate, ToDo, Task,
}