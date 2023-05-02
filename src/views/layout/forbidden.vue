
<template>
  <div class='page-http-status'>
    <!-- <img :src='httpStatusImg'> -->
    <div class='page-info'>
      <span class='page-tip'>抱歉，您无权访问此页面</span>
      <el-button type='primary' link @click='goHome'>
        返回首页
      </el-button>
    </div>
  </div>
</template>

<script>
// import httpStatusImg from '@/assets/common/403.png';

export default {
  // data() {
  //   return { httpStatusImg };
  // },
  methods: {
    goHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss" scoped>
.page-http-status {
  text-align: center;
  position: relative;
  top: 50%;
  transform: translateX(0) translateY(-50%);
  .page-info {
    margin-top: 16px;
  }

  .page-tip {
    color: #666;
    font-size: 14px;
    margin-right: 16px;
  }
}
</style>
