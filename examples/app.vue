<!--
 * @Author: TuXunJia
 * @Date: 2024-12-29 16:29:15
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-24 16:43:11
 * @Description: 
-->
<template>
  <div>
    <button @click="onClick">打开SettingsModal</button>
    <bd-button @click="onClick">打开SettingsModal1</bd-button>
    <bd-button size="large" type="primary">打开SettingsModal2</bd-button>
    <Button size="small">测试3</Button>
  </div>
  <TableSettingsModal
    ref="modalRef"
    :columns="[
      { title: '门店名称', isShow: true },
      { title: '门店编码', isShow: true },
      { title: '商品名称', isShow: false },
    ]"
  />
</template>
<script lang="ts" setup>
import { Button, TableSettingsModal } from '@yf-bigdata/vue-ui';
import '@yf-bigdata/vue-ui/lib/button/style/index.css';
import '@yf-bigdata/vue-ui/lib/table-settings-modal/index.css';

import { ref } from 'vue';

const modalRef = ref();

const onClick = () => {
  modalRef.value?.showModal();
};
</script>
