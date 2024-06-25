<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/imgs/logo.svg" alt="cms" />
      <div>我的管理系统</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>

<style lang="less" scoped>
.main-menu {
  width: 210px;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    padding: 12px 10px 8px;
    .img {
      height: 100%;
      margin: 0 10px;
    }
  }
}
</style>
