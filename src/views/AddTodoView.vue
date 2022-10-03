<template>
  <h2>Add todo</h2>
  <form @submit.prevent="onSubmit">
    <label>Todo name</label>
    <input type="text" v-model="todoName" placeholder="Enter todo name..." />
    <p class="error" v-if="errorMsg">{{ errorMsg }}</p>
    <div class="row">
      <button class="button-primary" type="submit">Add</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

import { useRouter } from "vue-router";
import { useTodoStore } from "../stores/todo";

const todoName = ref("");
const errorMsg = ref("");

const todoStore = useTodoStore();
const router = useRouter();

function onSubmit() {
  if (todoName.value.length < 3) {
    errorMsg.value = "Minimum todo name: 3 chars";
    return;
  }

  const todo = {
    id: Date.now(),
    name: todoName.value,
    status: false,
  };

  todoStore.add(todo);
  router.push("/");
}
</script>
