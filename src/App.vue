<template>
  <div class="App">
    <h1>Todo-List</h1>
    <div class="card">
      <TodoHeader @addTodo="handleAdd"></TodoHeader>
      <TodoMain @del="handleDel" :lists="lists"></TodoMain>
      <TodoFooter :lists="lists" @clear="handleClear"></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoMain from "@/components/TodoMain.vue";
import TodoFooter from "@/components/TodoFooter.vue";

const initialLists = [
  { id: 1, name: "吃饭", done: false },
  { id: 2, name: "睡觉", done: true },
  { id: 3, name: "打代码", done: false },
  { id: 4, name: "逛街", done: true },
];
export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      lists: JSON.parse(localStorage.getItem("lists")) || initialLists,
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
    handleDel(id) {
      this.lists = this.lists.filter((item) => item.id !== id);
    },
    handleClear() {
      this.lists = [];
    },
  },
  watch: {
    lists: {
      deep: true,
      handler(Newlists) {
        localStorage.setItem("lists", JSON.stringify(Newlists));
      },
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
