<!--
 * @Author: TuXunJia
 * @Date: 2024-12-29 17:01:11
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-03 18:15:24
 * @Description: 
-->
<template>
  <button class="bd-button" :class="buttonStyle"><slot /></button>
</template>

<script setup lang="ts">
import './style/index.less';
import { computed } from 'vue';
// 定义组件名称
defineOptions({
  name: 'bd-button', // 建议使用带前缀的命名方式
});

export interface IButtonProps {
  size?: 'small' | 'middle' | 'large';
  type?: string;
}

const props = withDefaults(defineProps<IButtonProps>(), { size: 'small' });

const buttonStyle = computed(() => {
  return { [`ea-button--${props.type}`]: Boolean(props.type) };
  //   return { [`ea-button--${props.type}`]: props.type };
});
</script>
