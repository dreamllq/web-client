<template>
  <el-dropdown class='toolbar' @command='handleCommand'>
    <span class='el-dropdown-link'>
      {{ user.nickName || '-' }}
      <el-icon class='el-icon--right'>
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command='logout'>
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { getUser } from '@/services/user';
import { clearToken } from '@/services/token';
import { ref } from 'vue';
import { toLogin } from '@/services/session';
import { ElMessageBox } from 'element-plus';

const user = ref(getUser());

const handleCommand = async (command) => {
  if (command === 'logout') {
    await ElMessageBox.confirm('确认删除吗？', '退出确认');
    clearToken();
    toLogin();
  }
};

</script>

<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  line-height: 59px;
}
</style>