<template>
  <div class='common-layout'>
    <el-container class='container'>
      <el-header class='header'>
        <l-header>
          <template #logo>
            <slot name='logo' />
          </template>
          <template #toolbar>
            <slot name='toolbar' />
          </template>
        </l-header>
      </el-header>
      <el-container style='overflow: hidden;'>
        <el-aside width='260px' class='aside'>
          <aside-menu :menu-list='menuList' :menu-index='menuIndex' :route-data='routeData' />
        </el-aside>
        <el-container>
          <el-main>
            <slot />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from './menu.vue';
import LHeader from './header.vue';

export default {
  name: 'Layout',
  components: {
    AsideMenu: Menu,
    LHeader 
  },
  props: {
    menuList: {
      type: Array,
      default: () => [] 
    },
    routeData: {
      type: Function,
      default: () => ({})
    }
  },
  data() {
    return {
      menuIndex: null,
      newMenus: [],
      hasPermission: false,
      permissionChecking: true,
      isCollapse: false
    };
  },
  watch: {
    $route: {
      handler() {
        this.setMenuIndex();
      },
      // 深度观察监听
      deep: true,
      immediate: true
    }
  },
  mounted() {
    this.menuInit();
  },
  methods: {
    menuInit() {
      let flatMapCb = item => Array.isArray(item.children) && item.children.length > 0 ? item.children.flatMap(flatMapCb) : item;
      this.newMenus = [...this.menuList].flatMap(flatMapCb);
      this.setMenuIndex();
    },
    // 设置Menu选中
    setMenuIndex() {
      if (this.$route) {
        const pathName = this.$route.name;
        let val = this.newMenus.find((item) => pathName === item.key);
        for (const item of this.newMenus) {
          if (item.subPages !== undefined) {
            for (const page of item.subPages) {
              if (pathName === page) {
                val = item;
              }
            }
          }
        }
        if (val !== undefined) {
          this.menuIndex = val.key;
        }
      } 
    },
    handleCollapse() {
      this.isCollapse = !this.isCollapse;
      this.$refs.asideMenu.handleCollapse(this.isCollapse);
    }
  }
};
</script>

<style lang="scss" scoped>
.flex-grow {
  flex-grow: 1;
}
.common-layout{
    height: 100%;
    overflow: hidden;
    .container{
        height: 100%; 
        .header{
            border-bottom: 1px solid var(--el-border-color-light);
        }
        .aside{
            border-right: 1px solid var(--el-border-color-light);
        }
    }
}
</style>