<template>
  <div class="App">
    <h1>Todo-List</h1>
    <div class="card">
      <TodoHeader></TodoHeader>
      <TodoMain :lists="lists"></TodoMain>
      <TodoFooter :total="lists.length"></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoMain from "@/components/TodoMain.vue";
import TodoFooter from "@/components/TodoFooter.vue";
export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      lists: [
        { id: 1, name: "吃饭", done: false },
        { id: 2, name: "睡觉", done: true },
        { id: 3, name: "打代码", done: false },
        { id: 4, name: "逛街", done: true },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.App {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding-top: 120px;
}
.card {
  width: min(90%, 550px);
  padding: 1rem;
  background-color: rgb(116, 75, 75);

  box-shadow: $soft-Shadow;
}
</style>
