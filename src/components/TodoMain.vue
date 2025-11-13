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

          <input
            v-if="isEditingId === item.id"
            :ref="'inp' + item.id"
            type="text"
            v-model="editingInput"
            @keydown.enter="editedSubmit()"
            @keydown.esc="cancelEdit()"
            @blur="editedSubmit()"
          />
          <p v-else @dblclick="editFocus(item.id)">{{ item.name }}</p>
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
  data() {
    return {
      // 预防isEditingId 类型不一致？？
      isEditingId: null,
      editingInput: "",
    };
  },
  methods: {
    delItem(id) {
      this.$emit("del", id);
    },
    editFocus(id) {
      // console.log("双击编辑", id);
      this.isEditingId = id;
      this.editingInput = this.lists.find((item) => item.id === id).name;
      this.$nextTick(() => {
        const ref = this.$refs["inp" + id];
        // ref 在 v-for 中是数组，需要取第一个元素
        const input = Array.isArray(ref) ? ref[0] : ref;
        // console.log(input);
        input.focus();
        // if (input && input.focus) {？？
        //   input.focus();
        //   // 将光标移到文本末尾
        //   if (input.setSelectionRange) {
        //     const len = this.editingInput.length;
        //     input.setSelectionRange(len, len);
        //   }
        // }
      });
    },
    editedSubmit() {
      // const trimmed = (this.editingInput || "").trim();
      // if (trimmed && this.isEditingId !== null) {
      //   this.$emit("edit", this.isEditingId, trimmed);
      // }
      this.$emit("edit", { id: this.isEditingId, name: this.editingInput });
      this.cancelEdit();
    },
    cancelEdit() {
      this.isEditingId = "";
      this.editingInput = "";
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

      input[type="text"] {
        flex: 1;
        padding: 0.5rem 0.75rem;
        border: 2px solid $theme-color;
        border-radius: 0.5rem;
        outline: none;
        font-size: $notes-font-size;
        transition: all 0.2s ease;

        &:focus {
          border-color: darken($theme-color, 10%);
          box-shadow: 0 0 0 3px rgba($theme-color, 0.1);
        }
      }
    }
    .delete {
      background: none;
      border: none;
      color: $theme-color;
      font-weight: bold;
      font-size: 1.5rem;
      cursor: pointer;
      &:hover {
        color: $delete-color;
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
