<template>
  <div>
    <el-form label-position='top'>
      <el-form-item label='平台选择'>
        <el-radio-group v-model='form.platform' class='ml-4'>
          <el-radio value='aliyun'>
            阿里云
          </el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>

    <template v-if='form.platform === "aliyun"'>
      <aliyun-sms ref='smsRef' />
    </template>

    <el-form>
      <el-form-item>
        <el-button type='primary' @click='onSave'>
          保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { SettingService } from '@/services/api';
import { ElMessage } from 'element-plus';
import { reactive, ref, onMounted } from 'vue';
import AliyunSms from './aliyun.vue';

const smsRef = ref();
const form = reactive({ platform: 'aliyun' });

onMounted(async () => {
  const res = await SettingService.getItems({ keys: ['SMS_PLATFORM'] });
  form.platform = res.data[0]?.value || '';
});

const onSave = async () => {
  const config = await smsRef.value.getData();
  console.log(config);
  await SettingService.setItems({
    requestBody: {
      data: [
        {
          key: 'SMS_PLATFORM',
          value: form.platform 
        },
        ...config
      ]
    } 
  });

  ElMessage.success('保存成功');
};
</script>

<style scoped>

</style>