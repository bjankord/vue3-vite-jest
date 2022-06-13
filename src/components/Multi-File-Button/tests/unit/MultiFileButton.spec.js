import { mount } from '@vue/test-utils';
import Button from '../../index.vue';

describe('Button', () => {
  it('should display required text', () => {
    const wrapper = mount(Button, {
      props: {
        msg: 'Button text'
      }
    });

    expect(wrapper.text()).toEqual('Button text');
  });

  it('triggers a click', async () => {
    const wrapper = mount(Button, {
      props: {
        msg: 'Button text'
      }
    })

    await wrapper.find('Button').trigger('click');
  })
});