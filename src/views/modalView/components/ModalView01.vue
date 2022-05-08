<!--
 * @Author: your name
 * @Date: 2022-05-04 13:35:14
 * @LastEditTime: 2022-05-04 16:25:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/views/modalView/components/showModal.vue
-->
<template>
  <a-modal
      title="Read -Only Page URL"
      :visible="visible"
      @ok="handleOk"
      @cancel="handleCancel"
      width="540px"
    >
    <!-- 自定义页脚部分 -->
      <template slot="footer">
        <a-button key="back" @click="handleCancel">
          取消
        </a-button>
        <a-button key="submit" type="primary"  @click="handleOk">
          确认
        </a-button>
      </template>

    <!-- 界面内容主题部分 -->
      <div class="modal-body-content">
        <p class="content-desc">Description for the Read-Only Page of Mining Account mander1</p>
        <div class="input-val-content">
          <a-textarea
            v-model="contentVal"
            placeholder="Controlled autosize"
            :auto-size="{ minRows: 3, maxRows: 5 }"
          />
        </div>
        <!-- 内容选择区域 -->
        <div class="val-select-space">
          <div class="val-select-left">
            <span class="label-desc">Access Permission</span>
          </div>
          <div class="val-select-right">
            <div class="select-check-line">
              <a-checkbox v-model="checkVal01">Workers</a-checkbox>
            </div>
            <div class="select-check-line">
              <a-checkbox v-model="checkVal02">Revenue Records</a-checkbox>
            </div>
            <div class="select-check-line">
              <a-checkbox v-model="checkVal03">Revenue Records(Payout Information Hidden)</a-checkbox>
            </div>
          </div>
        </div>
      </div>
    </a-modal>
</template>

<script>
  export default {
    name: 'showModal',
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        visible: this.value,
        contentVal: "",
        checkVal01: false,
        checkVal02: false,
        checkVal03: true,
      }
    },
    watch: {
      value(val) {
        if (this.visible !== val) this.visible = this.value
        if (this.visible) {
          console.log('打开弹出框')

        }
      },

      visible(val) {
        this.$emit("input", val);
      }
    },
    created() {

    },
    methods: {
      handleOk() {

      },

      handleCancel() {
        this.visible = false;
      }
    }
  }

</script>
<style scoped>
/* .custom-cls {
  width: 800px;
} */

.input-val-content {
  margin-top: 8px;
}

.val-select-space {
  margin-top: 12px;
}

.val-select-left {
  width: 160px;
  display: inline-block;
  vertical-align: top;
}

.val-select-right {
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 170px);
  margin-left: 10px;
}

.label-desc {
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height */
  color: #606266;
}
</style>
