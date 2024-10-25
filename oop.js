PRIORITY = { "LOW": 1, "MEDIUM": 3, "HIGH": 5, "URGENT": 7 };


function validInteger (value) { // value can be a string or a number (integer)
  
  return Number.isInteger(value) && value > 0;
}  


function validatePriority(priority) { // value can be a string or a number (integer)
  
}


function todaysDate () {
  // Returns the current date and time in the format 'dd/mm/yyyy hh:mm:ss'.
  
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

  // (title, priority)
}


class ToDo {
  constructor(){
    this.tasks = ['']
  }

  add(){}
  remove(){}
  list(){}
  task(){}
    
}








// Leave this code here for the automated tests
module.exports = {
  PRIORITY, validInteger, validatePriority, todaysDate, ToDo, Task,
}