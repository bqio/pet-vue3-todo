import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useTodoStore = defineStore("todo", () => {
  const todos = useLocalStorage("todos", []);

  function add(todo) {
    todos.value.push(todo);
  }

  function toggle(todo) {
    todo.status = !todo.status;
  }

  function remove(id) {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  }

  return { todos, add, toggle, remove };
});
