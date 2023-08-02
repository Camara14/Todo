export const  filters = {
    all: function (todos) {
        return todos;
    },
    active: function (todos) {
        return todos.filter(function (todo) {
            return !todo.completed;
        });
        
    },
    completed: function (todos) {
        return todos.filter(function (todo) {
            return todo.completed;
        });
    }
};

export const  allDone = {
    get: function () {
      return this.remaining === 0;
    },
    set: function (value) {
      this.todos.forEach(function (todo) {
        todo.completed = value;
      });
    },
  };