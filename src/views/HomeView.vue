<template>
  <div class="page-list clearfix">
    <ElCard v-for="(item) in list" :body-style="{ padding: '0px' }" :key="item.id" shadow="hover">
      <img :src="item.coverImg" class="cover-image" alt="">
      <div class="page-info">
        <span>{{item.title}}</span>
        <div class="action-btns">
          <ElButton type="primary" size="small" class="button" @click="handleEditPage(item.id)">编辑页面</ElButton>
        </div>
      </div>
    </ElCard>
    <ElCard class="add-card" :body-style="{ padding: '0px' }" shadow="hover" @click="handleAddPage">
      <div class="cover-image add-page">
        <i class="el-icon-plus"></i>
      </div>
      <div class="page-info">
        <div class="add">新建空白页面</div>
      </div>
    </ElCard>
  </div>
</template>

<script lang="ts" setup>
import PageList from '@/mock/pageList.json'
import utils from '@/utils'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessageBox } from 'element-plus'

defineComponent({
  name: 'page-list',
})

const list = ref(utils.getLocalData('page_list') || PageList);

const router = useRouter();

const handleEditPage = (id) => {
  router.push({
    path: '/editor',
    query: { id }
  })
}

const handleAddPage = () => {
  ElMessageBox.prompt('请输入页面名称', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    inputPattern: /\S+/,
    inputErrorMessage: '请输入页面名称',
    closeOnClickModal: false
  }).then(({ value }) => {
    const lastItem = list.value[list.value.length - 1]
    const newId = lastItem ? lastItem.id + 1 : 1;
    list.value.push({
      id: newId,
      title: value,
      coverImg: '//shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
    })
    utils.saveLocalData('page_list', list.value)
    router.push({
      path: '/editor',
      query: { id: newId }
    })
  })
}
</script>

<style lang="scss" scoped>
.page-list {
  overflow-y: auto;

  .el-card {
    margin: 16px;
    float: left;
  }

  .add-card {
    cursor: pointer;
  }

  .cover-image {
    width: 200px;
    height: 300px;
    object-fit: cover;
  }

  .add-page {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .el-icon-plus {
    font-size: 70px;
    color: #bbb;
  }

  .action-btns {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }

  .page-info {
    padding: 10px;
    height: 84px;

    .add {
      text-align: center;
    }
  }
}
</style>
