<!--
 * @Author: your name
 * @Date: 2022-04-22 22:41:33
 * @LastEditTime: 2022-05-04 16:23:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/views/Home.vue
-->
<template>
  <div class="home">
    <a-button type="primary" @click="handleShowDialog01">弹出框01</a-button>
    <a-button type="primary" @click="handleShowDialog02">弹出框02</a-button>
    <a-button type="primary" @click="handleShowDialog03">弹出框03</a-button>

    <ModalView01 v-model="modalView01Visible"></ModalView01>
    <ModalView02 v-model="modalView02Visible"></ModalView02>
    <ModalView03 v-model="modalView03Visible"></ModalView03>
  </div>
</template>

<script>
  // @ is an alias to /src
  import ModalView01 from './components/ModalView01.vue';   // Read -Only Page URL
  import ModalView02 from './components/ModalView02.vue';   // 报警设置
  import ModalView03 from './components/ModalView03.vue';   // 双重验证

  export default {
    name: 'showModal',
    components: {
      ModalView01,
      ModalView02,
      ModalView03
    },
    data() {
      return {
        modalView01Visible: false,
        modalView02Visible: false,
        modalView03Visible: false,
      }
    },
    methods: {
      handleShowDialog01() {
        this.modalView01Visible = true;
      },

      handleShowDialog02() {
        this.modalView02Visible = true;
      },

      handleShowDialog03() {
        this.modalView03Visible = true;
      },
    }
  }

</script>
