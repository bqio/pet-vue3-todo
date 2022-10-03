<script setup>
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useTodoStore } from "../stores/todo";

import TodoList from "../components/TodoList.vue";

const router = useRouter();
const { todos } = storeToRefs(useTodoStore());
</script>

<template>
  <div class="flex">
    <h2>Todo List</h2>
    <button @click="router.push('/add')">Add todo</button>
  </div>
  <TodoList :todos="todos" v-if="todos.length" />
  <div v-else>Todos not found.</div>
</template>
