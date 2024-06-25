<template>
  <div class="main">
    <el-container>
      <el-aside width="200px">
        <main-menu />
      </el-aside>
      <el-container>
        <el-header>
          <main-header />
        </el-header>
        <el-main>
          Main
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import MainHeader from '@/components/main-header/main-header.vue'
import MainMenu from '@/components/main-menu/main-menu.vue'
</script>

<style lang="less" scoped>
.main {
  color: red;
}
</style>
