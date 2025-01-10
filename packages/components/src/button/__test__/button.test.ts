/*
 * @Author: TuXunJia
 * @Date: 2025-01-10 11:12:30
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-01-10 12:52:26
 * @Description:
 */
import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import button from '../button.vue';

describe('test button', () => {
  it('should render slot', () => {
    const wrapper = mount(button, {
      slots: {
        default: 'vue-ui',
      },
    });
    expect(wrapper.text()).toContain('vue-ui');
  });
  it('should have class', () => {
    const wrapper = mount(button, {
      props: {
        type: 'primary',
      },
    });
    expect(wrapper.classes()).toContain('bd-button--primary');
  });
});
