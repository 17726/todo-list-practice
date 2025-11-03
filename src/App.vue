<template>
  <div class="App">
    <h1>Todo-List</h1>
    <div class="card">
      <TodoHeader @addTodo="handleAdd()"></TodoHeader>
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
  methods: {
    handleAdd(todoName) {
      //逆向压栈unshift

      this.lists.unshift({
        id: +new Date(),
        name: todoName,
        done: false,
      });
    },
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
  padding-bottom: 60px;
}
.card {
  // display: flex;
  // flex-direction: column;
  //  lign-items: center;
  // gap: 1rem;
  width: min(90%, 550px);
  padding: 1.5rem;
  background-color: rgb(255, 255, 255);
  border-radius: 1rem;
  box-shadow: $soft-Shadow;

}
</style>
