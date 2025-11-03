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
    padding: 1rem;
    border: none;
    font-size: $notes-font-size;

    // background: rgba(0, 0, 0, 0.003);
    // box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }
  button {
    padding: 0 1rem;
    background-color: $theme-color;
    color: white;
    border: none;
    font-size: $notes-font-size;
  }
}
</style>
