# Vue 2 Todo-List 练习项目

这是一个使用 Vue 2 和 Vue CLI 构建的简单待办事项列表（Todo-List）应用程序。该项目旨在练习 Vue 的组件化开发、父子组件通信以及 Sass 在项目中的应用。

## ✨ 主要功能

- **添加任务**: 在输入框中输入任务，按回车或点击“添加”按钮即可创建新任务。
- **标记完成**: 点击任务前的复选框，可以标记任务为已完成状态，并附带删除线效果。
- **删除任务**: 点击任务右侧的 "×" 按钮可以删除单个任务。
- **底部信息统计**: 页脚会显示剩余未完成任务的数量。
- **清空已完成**: 点击页脚的“清除已完成”按钮，可以一键移除所有已完成的任务。

## 📝 下一步开发计划

- **双击修改任务**: 双击任务文本，可以进入编辑模式，修改任务内容。
- **任务搜索功能**: 添加搜索框，可以根据关键词过滤任务列表。

## 🛠️ 技术栈

- **框架**: [Vue.js](https://v2.vuejs.org/) (v2)
- **脚手架**: [Vue CLI](https://cli.vuejs.org/)
- **样式**: [Sass/SCSS](https://sass-lang.com/)
- **核心概念**:
  - 组件化开发 (`TodoHeader`, `TodoMain`, `TodoFooter`)
  - 父子组件通信 (`props` 和 `$emit`)
  - `v-model` 数据双向绑定
  - `v-for` 列表渲染
  - `:class` 动态类绑定
  - `watch` 侦听器实现数据持久化 (localStorage)
  - 使用 `$ref` 和 `$nextTick` 操作 DOM 以提升用户体验

## 🚀 如何开始

### 1. 克隆项目

```bash
git clone https://github.com/17726/todo-list-practice.git
cd vue-cli-02
```

### 2. 安装依赖

在项目根目录下运行以下命令来安装所有必需的依赖包：

```bash
npm install
```

### 3. 运行开发服务器

安装完成后，运行以下命令来启动本地开发服务器：

```bash
npm run serve
```

项目将会在 `http://localhost:8080` (或另一个可用端口) 上运行。在浏览器中打开该地址即可查看应用。

## 📂 项目结构

```
.
├── public/
├── src/
│   ├── assets/
│   │   └── style/         # 全局 Sass 样式和变量
│   ├── components/        # Vue 组件
│   │   ├── TodoHeader.vue
│   │   ├── TodoMain.vue
│   │   └── TodoFooter.vue
│   ├── App.vue            # 根组件
│   └── main.js            # 应用入口文件
├── babel.config.js
├── package.json
└── vue.config.js        # Vue CLI 配置文件 (用于Sass全局注入)
```
