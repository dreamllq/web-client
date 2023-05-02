<template>
  <div class='permission-layout'>
    <router-view v-if='hasPermission === true' />
    <forbidden v-else />
  </div>
</template>

<script>
import { checkPermission } from '@/services/permission';
import Forbidden from './forbidden.vue';
export default {
  components: { Forbidden },
  data() {
    return { hasPermission: true };
  },
  watch: {
    $route: {
      handler() {
        let { permissionKey } = this.$route.meta;
        if (permissionKey !== undefined) {
          this.hasPermission = checkPermission(permissionKey);
        }
      },
      deep: true,
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped>
.permission-layout {
  height: 100%;
}
</style>
