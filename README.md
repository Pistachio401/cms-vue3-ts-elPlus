# cms-vue3-ts-elPlus

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# 1. 在tsconfig.json中compilerOptions里配置允许隐式any

# 2. 在.eslintrc.cjs中的rules中将vue文件的命名不可以使用单个单词关闭

# 3. Vite使用 .env 文件从你的环境目录中的下列文件加载额外的环境变量，但只有以 VITE_ 开头的文件才会暴露给经过vite处理的代码

# 4. 引入样式文件要使用 @import url('位置'); 分号不能少

# 5. login页面背景图100%，会渲染到App.vue上，因此App.vue中必须设置宽100vw高100vh

# 6. 从其他文件引入自定义类型时，有时配置路由也会出现这种状况，VSCode可能会检测不到，重启即可

# 7. defineExpose：定义暴露的属性和方法，然后父组件在获得子组件的实例后就可以进行监听了

# 8. 在ElementPlus中，按需引入方式仅仅是普通组件的引入，反馈组件仍需单独引入，且无论是按需引入还是全局引入，'element-plus/dist/index.css'（全部样式）样式文件都需要引入，el-icons也需要单独的进行全局注册，否则不生效。若采用按需引入方式，也可单独引用用到的反馈组件的样式，eg：import 'element-plus/theme-chalk/el-message.css'。

# 9. 

# 7. 

# 7. 

# 7. 

# 7. 

# 7. 

# 7. 

# 7. 

# 7. 

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#
