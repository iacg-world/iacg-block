<template>
  <finac-page
    :components="testData.components"
    :page="testData.page"
  ></finac-page>
</template>

<script lang="ts">
/* eslint-disable vue/no-unused-components */
import { defineComponent } from 'vue'
import CText from './components/CText/CText.vue'
import CImage from './components/CImage/CImage.vue'
import CShape from './components/CShape/CShape.vue'
import FinalPage from './components/FinalPage/FinalPage.vue'
export default defineComponent({
  name: 'App',
  components: {
    CText,
    CImage,
    CShape,
    FinalPage,
  },
  setup() {
    const testData = {
      page: {
        props: {
          backgroundImage:
            'url("https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f6ea094dc5a797fb46c1db5.jpg")',
        },
      },
      // 页面上面一个个组件的属性
      components: [
        {
          id: '123',
          name: 'c-text',
          props: { text: 'hello', top: '0', left: '20px' },
        },
        {
          id: '234',
          name: 'c-image',
          props: {
            imageSrc:
              'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f6338e666336111f73d220c.png',
            top: '30px',
            left: '20px',
          },
        },
        {
          id: '235',
          name: 'c-shape',
          props: {
            backgroundColor: 'red',
            top: '50px',
            left: '20px',
            width: '100px',
            height: '100px',
          },
        },
        // 这是一个链接
        {
          id: '345',
          name: 'c-text',
          props: {
            backgroundColor: '#1890ff',
            color: '#ffffff',
            text: '按钮内容',
            width: '100px',
            actionType: 'to',
            url: 'http://www.baidu.com',
            top: '200px',
            left: '150px',
          },
        },
      ],
    }
    return {
      testData,
    }
  },
})
</script>

<style></style>
