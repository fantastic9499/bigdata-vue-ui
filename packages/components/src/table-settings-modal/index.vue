<!--
 * @Author: TuXunJia
 * @Date: 2025-07-23 15:40:50
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-24 17:19:26
-->
<template>
  <a-modal
    title="表格字段设置"
    :visible="visible"
    width="520px"
    :bodyStyle="{ minHeight: '450px' }"
    @ok="onOk"
    @cancel="onCancel"
  >
    <VueDraggable
      v-model="columns"
      :animation="150"
      ghostClass="ghost"
      class="column_container"
    >
      <div
        v-for="(item, index) in columns"
        :key="item.title"
        class="customColumnMain"
      >
        <div class="column">
          <div class="index">{{ index + 1 }}</div>
          <span class="name">{{ item.title }}</span>
          <a-switch v-model:checked="item.isShow" class="switch" size="small" />
          <MenuOutlined class="icon" />
        </div>
      </div>
    </VueDraggable>
  </a-modal>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash-es';
import { ref } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';

export interface ITableSettingsModalProps {
  columns: Array<{
    title: string;
    isShow: boolean;
  }>;
}

defineOptions({
  name: 'TableSettingsModal',
});

const props = defineProps<ITableSettingsModalProps>();
const emit = defineEmits(['change']);

const visible = ref(false);
const showModal = () => {
  visible.value = true;
};

const columns = ref(cloneDeep(props.columns));
const onOk = () => {
  emit('change', cloneDeep(columns.value));
  onCancel();
};
const onCancel = () => {
  visible.value = false;
};

defineExpose({
  showModal,
});
</script>

<style scoped lang="scss">
@use './style/index.scss';
</style>
