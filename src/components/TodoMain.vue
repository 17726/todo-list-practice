<template>
  <div class="todo-main">
    <ul class="todos">
      <li class="todo" v-for="item in lists" :key="item.id">
        <!-- 完成框checkbox -->
        <div class="todo-content">
          <input type="checkbox" v-model="item.done" />
          <p>{{ item.name }}</p>
        </div>
        <!-- 删除按钮 -->
        <button class="delete">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    lists: {
      type: Array,
      // required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-main {
  // width: 100%;
  margin: 1rem 0;
}
.todos {
  list-style: none;
  padding: 0;
  margin: 0;
  // 调整子元素间距
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  //完成按钮

  .todo {
    font-size: $notes-font-size;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .todo-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
    }
    .delete {
      background: none;
      border: none;
      color: red;
      font-weight: bold;
      font-size: 1.2rem;
      cursor: pointer;
    }
  }
}
</style>
