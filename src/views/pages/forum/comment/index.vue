<template>
  <el-container direction='vertical'>
    <el-aside>
      <el-row>
        <el-col :span='6'>
          板块名称：{{ postInfo.section.name }}
        </el-col>
        <el-col :span='6'>
          帖子标题：{{ postInfo.title }}
        </el-col>
        <el-col :span='6'>
          创建人：{{ postInfo.creator.nickName }}
        </el-col>
        <el-col :span='6'>
          创建时间：{{ postInfo.createDate }}
        </el-col>
      </el-row>
      <el-row style='margin-top: 12px'>
        <el-col :span='24'>
          帖子内容：{{ postInfo.content }}
        </el-col>
      </el-row>
    </el-aside>
    <el-aside style='margin-top: 24px'>
      <biz-filter @search='onSearch' />
    </el-aside>
    <el-aside style='margin-top: 24px'>
      <el-button @click='onAdd'>
        创建
      </el-button>
    </el-aside>
    <el-container style='margin-top: 16px;'>
      <el-main style='padding: 0'>
        <biz-table ref='bizTableRef' :post-id='postId' />
        <biz-add-dialog ref='bizAdd' :post-id='postId' />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import BizFilter from '@/views/components/forum/comment/filter.vue';
import BizTable from '@/views/components/forum/comment/table.vue';
import BizAddDialog from '@/views/components/forum/comment/add-dialog.vue';
import { useRoute } from 'vue-router';
import { ForumPost, ForumPostService } from '@/services/api';

const route = useRoute();
const postId = computed<string>(() => route.query.postId as string);
const bizTableRef = ref();
const bizAdd = ref();
const postInfo = ref<ForumPost>();

onMounted(async () => {
  const res = await ForumPostService.get({
    id: postId.value,
    relationSection: true
  });
  postInfo.value = res.data;
});

const onSearch = (filter) => {
  bizTableRef.value.filter(filter);
};

const onAdd = async () => {
  await bizAdd.value.create();
  bizTableRef.value.refresh();
};
</script>

<style lang="scss" scoped>

</style>

<route>
  {
    "name":"forum-comment"
  }
</route>