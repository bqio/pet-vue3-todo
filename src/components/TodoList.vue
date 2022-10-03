<template>
  <table class="u-full-width">
    <thead>
      <tr>
        <th>Name</th>
        <th>Done</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in todos" :key="todo.id">
        <td>{{ todo.name }}</td>
        <td>
          <input
            type="checkbox"
            :checked="todo.status"
            @change="todoStore.toggle(todo)"
          />
        </td>
        <td>
          <button class="button-primary" @click="todoStore.remove(todo.id)">
            Remove
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useTodoStore } from "../stores/todo";
const todoStore = useTodoStore();
defineProps({
  todos: Array,
});
</script>

<style scoped></style>
