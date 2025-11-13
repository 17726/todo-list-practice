<template>
  <div class="App">
    <h1>Todo-List</h1>
    <div class="card">
      <TodoHeader @addTodo="handleAdd"></TodoHeader>
      <TodoMain @del="handleDel" :lists="lists" @edit="handleEdit"></TodoMain>
      <TodoFooter :lists="lists" @clear="handleClear"></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoMain from "@/components/TodoMain.vue";
import TodoFooter from "@/components/TodoFooter.vue";

const initialLists = [
  { id: 1, name: "Coding", done: false },
  { id: 2, name: "逛公园", done: true },
  { id: 3, name: "吃晚饭", done: false },
  { id: 4, name: "睡觉", done: true },
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
      //重复校验
      if (this.lists.every((item) => item.name !== todoName.trim())) {
        //逆向压栈unshift
        this.lists.unshift({
          id: +new Date(),
          name: todoName,
          done: false,
        });
      } else {
        alert("任务已存在！");
      }
      // 或用.some更符合语义
      // if (!this.lists.some((item) => item.name === todoName.trim())) {
    },
    handleDel(id) {
      this.lists = this.lists.filter((item) => item.id !== id);
    },
    handleClear() {
      this.lists = [];
    },
    handleEdit(id, newTodoName) {
      // 从子组件接收两个参数，id和新的任务名称
      this.lists = this.lists.map((item) => {
        if (item.id === id) {
          return{...item,name:newTodoName}
        } else {
          return item;
        }
      });
    }
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
  padding-top: 10vh;
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
