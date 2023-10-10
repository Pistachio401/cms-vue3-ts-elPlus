<template>
  <div class="panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="icon">
            <el-icon><UserFilled /></el-icon>
            <span class="text">账号登录</span>
          </span>
        </template>
        <PanelAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="icon">
            <el-icon><Iphone /></el-icon>
            <span class="text">手机登录</span>
          </span>
        </template>
        <PanelPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="control-account">
      <el-checkbox v-model="isKeep" label="记住密码" />
    </div>
    <el-button type="primary" class="login-btn" @click="loginAction">立即登录</el-button>
  </div>
</template>

<script setup lang="ts" name="panel">
import { ref, watch } from 'vue'
import PanelPhone from './panel-phone.vue'
import PanelAccount from './panel-account.vue'
import { localCache } from '@/utils/cache'

const currentTab = ref('account')
// 不能写成下面这种
// const isKeep = ref<boolean>(localCache.getCache('rem_pwd'))
// 会报错误: type 'string | null' is not assignable to parameter of type 'boolean'
// 而应该写成下面这种
const isKeep = ref<boolean>(Boolean(localCache.getCache('rem_pwd')))
watch(isKeep, (newValue) => {
  // const val: any = newValue
  localCache.setCache('rem_pwd', newValue)
  // localStorage.setItem('hhh', newValue)
})

// <InstanceType<typeof Component>> 获取到组件实例的固定方式
// 因为这里的Component不是一个类型，而是一个对象（类），一个值而已
//（并不是说对象不能作为一个类型，而是说这里不允许这样写）

// 解释！！！：将Component当成类一样的构造器，由其可以创建一大堆实例对象
//      获取这个构造器所创建出来的实例对象的类型作为这里的类型

// 再解释一下：class Person {}  const p = new Person()
// 虽然 typeof Person === InstanceType<typeof Person>
// 但是有时不能直接使用Person作为一种类型
// 例如这里：PanelAccount是由"类"PanelAccount实例化后的对象，它是一个值，不是一种类型
// 而我们需要由这个实例化后的对象去反推出PanelAccount类型，所以才使用下面这种方式进行获取的
// 通过typeof Person 拿到的是构造器，然后通过InstanceType获取的是其返回值的类型
const accountRef = ref<InstanceType<typeof PanelAccount>>()
const phoneRef = ref<InstanceType<typeof PanelPhone>>()

function loginAction() {
  if (currentTab.value === 'account') {
    accountRef.value?.loginAction(isKeep.value)
  } else {
    phoneRef.value?.loginAction(isKeep.value)
  }
}
</script>

<style scoped lang="less">
.panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .control-account {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
