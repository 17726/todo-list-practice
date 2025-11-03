<template>
  <div class="todo-main">
    <ul class="todos">
      <li
        class="todo"
        v-for="item in lists"
        :key="item.id"
        :class="{ done: item.done }"
      >
        <!-- 完成框checkbox -->
        <div class="todo-content">
          <input type="checkbox" v-model="item.done" />
          <p>{{ item.name }}</p>
        </div>
        <!-- 删除按钮 -->
        <button class="delete" @click="delItem(item.id)">×</button>
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
  methods: {
    delItem(id) {
      this.$emit("del", id);
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

    // padding: 0.75rem 1rem;          // 增加内边距
    // 分隔线
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    // 去除最后一项的的分割线
    &:last-child {
      border-bottom: none;
    }
    .todo-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
    }
    .delete {
      background: none;
      border: none;
      color: $theme-color;
      font-weight: bold;
      font-size: 1.5rem;
      cursor: pointer;
      &:hover {
        color:$delete-color ;
        transform: scale(1.1);
      }
    }
    &.done {
      .todo-content {
        p {
          color: #999;
          text-decoration: line-through;
          text-decoration-thickness: 2px;
        }
      }
    }
  }
}
</style>
