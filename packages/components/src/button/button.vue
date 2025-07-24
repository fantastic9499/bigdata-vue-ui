<!--
 * @Author: TuXunJia
 * @Date: 2024-12-29 17:01:11
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-23 19:37:17
 * @Description: 
-->
<template>
  <button class="bd-button" :class="buttonStyle" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import './style/index.scss';
// 定义组件名称
defineOptions({
  name: 'bd-button', // 建议使用带前缀的命名方式
});

export interface IButtonProps {
  size?: 'small' | 'middle' | 'large';
  type?: 'primary' | 'default';
}

const props = withDefaults(defineProps<IButtonProps>(), { size: 'small' });

const buttonStyle = computed(() => {
  return { [`bd-button--${props.type}`]: Boolean(props.type) };
});
</script>
