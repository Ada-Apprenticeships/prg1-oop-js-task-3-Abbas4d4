PRIORITY = { "LOW": 1, "MEDIUM": 3, "HIGH": 5, "URGENT": 7 };


function validInteger (value) { // value can be a string or a number (integer)
  return Number.isInteger ? true : false;
}  


function validatePriority(priority) {
  // Converts priority to an integer if it's a string and checks against valid PRIORITY levels
  const intPriority = typeof priority === 'string' ? parseInt(priority) : priority;
  return PRIORITY['LOW'] <= intPriority && intPriority <= PRIORITY['URGENT'] ? intPriority : PRIORITY['LOW'];
}


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

  constructor(added,title,priority){
    this._added = added
    this._title = title
    this._priority = priority
  }

  get _added(){
    return this.added
  }
  get _title(){
    return this._title
  }
  get _priority(){
    return this._priority
  }
  set _priority(Value){
    this._priority = validatePriority(Value)

  }

  // (title, priority)
}


class ToDo {
  constructor(){
    this.tasks = ['']
  }

  add(){
    this.tasks.append[task]
    return this.tasks.length
  }
  remove(title) {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter((task) => task.title !== title);
    return this.tasks.length < initialLength;
  }
  list(){}
  task(){}
    
}








// Leave this code here for the automated tests
module.exports = {
  PRIORITY, validInteger, validatePriority, todaysDate, ToDo, Task,
}