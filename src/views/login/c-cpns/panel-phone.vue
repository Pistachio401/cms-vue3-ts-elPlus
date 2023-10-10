<template>
  <div class="phone">
    <el-form :model="phone" label-width="90px" ref="formRef" :rules="phoneRules">
      <el-form-item label="手机号" prop="phoneNumber">
        <el-input v-model="phone.phoneNumber" />
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode">
        <div class="verify-code">
          <el-input v-model="phone.verifyCode" />
          <el-button class="get-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts" name="phone">
import { ref, reactive } from 'vue'
import type { FormRules, FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { localCache } from '@/utils/cache'

// 1.定义内部的数据
const phone = reactive({
  phoneNumber: '',
  verifyCode: ''
})

// 2.定义校验规则
const phoneRules: FormRules = reactive({
  phoneNumber: [
    { required: true, message: '必须输入手机号~', trigger: 'blur' },
    { pattern: /^1[3-9]{1}[0-9]{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
  ],
  verifyCode: [
    { required: true, message: '必须输入验证码~', trigger: 'blur' },
    { pattern: /^[0-9]{6}$/, message: '请输入正确的验证码', trigger: 'blur' }
  ]
})

// 3.定义登录逻辑
const formRef = ref<FormInstance>()
function loginAction(isKeep: boolean) {
  // 是否通过了验证
  formRef.value?.validate((isValid) => {
    if (isValid) {
      const phoneNumber = phone.phoneNumber
      const verifyCode = phone.verifyCode
      // 1.登录操作
      // loginStore.accountLoginAction({ phoneNumber, verifyCode })

      // // 2.记住密码
      // if (isKeep) {
      //   localCache.setCache('phoneNumber', phoneNumber)
      //   localCache.setCache('verifyCode', verifyCode)
      // } else {
      //   localCache.removeCache('phoneNumber')
      //   localCache.removeCache('verifyCode')
      // }
    } else {
      ElMessage.warning({ message: '验证码输入错误~' })
    }
  })
}

// 4.定义暴露的属性和方法，然后父组件就可以进行监听了
defineExpose({
  loginAction
})
</script>

<style scoped lang="less">
.verify-code {
  display: flex;

  .get-btn {
    margin-left: 8px;
  }
}
</style>
