import { createStore, createLogger } from "vuex";
import { todoStorage } from "./Storage.js";

import { ref } from "vue";
const debug = process.env.NODE_ENV !== "production";
const plugins = debug ? [createLogger({})] : [];

const filters = {
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
  },
};

export default createStore({
  state: () => ({
    todos: '',
    newTodo: "",
    editedTodo: null,
    visibility: 'all',
    STORAGE_KEY: "todos-vuejs",
    todoStorage: {
      fetch: null,
      save: null,
    },
  }),
  getters: {
    getVisibility(state){
      return state.visibility;
    }
  },
  mutations: {
    setFetchTodoStorage(state) {
      state.todoStorage.fetch = todoStorage.fetch();
      state.todos = state.todoStorage.fetch;
    },
    setVisibility(state, visibility){

      state.visibility = visibility;

    }
  },
  actions: {},
  strict: debug,
  plugins,
});
