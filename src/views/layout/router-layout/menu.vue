<template>
  <el-menu
    ref='menu'
    :router='true'
    :collapse='isCollapse'
    :default-active='menuIndex'
    style='border: 0'
  >
    <template v-for='item in menuList'>
      <sub-menu
        v-if='Array.isArray(item.children) && item.children.length > 0'
        :key='item.key'
        popper-class='layout-popper'
        :menu-item='item'
      />
      <el-menu-item
        v-else
        :key='item.key.toString()'
        :route='{
          name: item.key,
          ...routeData()
        }'
        :index='item.key'
      >
        <el-icon v-if='item.icon'>
          <component :is='item.icon' />
        </el-icon>
        <template #title>
          {{ item.label }}
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>
    
<script>
import SubMenu from './sub-menu.jsx';
export default {
  components: { SubMenu },
  props: {
    menuList: {
      type: Array,
      default: () => [] 
    },
    menuIndex: {
      type: String,
      default: null 
    },
    routeData: {
      type: Function,
      default: () => ({})
    }
  },
  data() {
    return { isCollapse: false };
  },
  computed: {},
  created() {
  },
  methods: {
    handleCollapse(isCollapse) {
      this.isCollapse = isCollapse;
    }
  }
};
</script>

<style lang="scss">
.layout-popper {
  position: fixed !important;

  >.el-menu--popup  {

      max-height: 400px;
      overflow-y: auto;
    }
}
</style>