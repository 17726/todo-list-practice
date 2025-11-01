<template>
  <div class="App">
    <h1>记事本</h1>
    <div class="card">
      <TodoHeader></TodoHeader>
      <TodoMain></TodoMain>
      <TodoFooter></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
};
</script>

<style lang="scss" scoped>
.card {
}
</style>
