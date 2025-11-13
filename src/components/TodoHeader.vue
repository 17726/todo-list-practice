<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入任务"
      v-model="input"
      @keydown.enter="handleAdd()"
    />
    <button @click="handleAdd()">添加任务</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    handleAdd() {
      if (this.input.trim() === "") return;
      this.$emit("addTodo", this.input);
      this.input = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-header {
  display: grid;
  grid-template-columns: 1fr auto;
  // width: 100%;
  border: 2px solid $theme-color;
  border-radius: 1rem;
  //子元素超出部分隐藏
  overflow: hidden;
  input {
    //清除默认最小宽度
    min-width: 0;
    padding: 1rem;
    border: none;
    outline: none;
    font-size: $notes-font-size;

    &:focus {
      background-color: rgba(0, 0, 0, 0.02);
    }
  }
  button {
    padding: 0 1rem;
    background-color: $theme-color;
    color: white;
    border: none;
    font-size: $notes-font-size;
  }
}
@media (max-width: 400px) {
  // 较窄移动端
  .todo-header {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    button {
      width: 100%;
    }
  }
}
</style>
