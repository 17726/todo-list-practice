<template>
  <div class="todo-main">
    <ol class="todos">
      <li class="todo" v-for="item in lists" :key="item.id">{{ item.name }}</li>
    </ol>
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
}
li {
  font-size: $notes-font-size;
}
</style>
