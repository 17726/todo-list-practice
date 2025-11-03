<template>
  <div class="todo-footer">
    <p>总数：{{ total }}</p>
    <a href="#">清空任务</a>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-footer {
  // width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  padding-bottom: 0;
  // 分隔线
  border-top: 2px solid $theme-color;
  
  a {
    text-decoration: none;
    //消除点击时的颜色变化
    color: inherit;
  }
}
</style>
