/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todolist = [];
  }
  add(todo) {
    this.todolist.push(todo);
  }
  remove(index) {
    if (index < this.todolist.length) this.todolist.splice(index, 1);
  }
  update(index, updatedTodo) {
    if (index < this.todolist.length) this.todolist[index] = updatedTodo;
  }
  getAll() {
    return this.todolist;
  }
  get(index) {
    if (index < this.todolist.length) return this.todolist[index];
    else return null;
  }
  clear() {
    while (this.todolist.length != 0) {
      this.todolist.shift();
    }
  }
}

module.exports = Todo;
