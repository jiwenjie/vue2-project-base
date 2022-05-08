<!--
 * @Author: your name
 * @Date: 2022-05-04 15:57:25
 * @LastEditTime: 2022-05-08 10:03:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/views/modalView/components/ModalView01 copy.vue
-->
<template>
  <a-modal
      title="报警设置"
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
        <div class="select-line">
          <div class="select-line-left">
            <span class="line-label">矿工掉线提醒</span>
          </div>
          <div class="select-line-right">
            <a-switch default-checked v-model="switchVal01"/>
            <span class="switch-option-val">矿工掉线的时候我们会即刻提醒</span>
          </div>
        </div>
        <div class="select-line">
          <div class="select-line-left cus-line-left">
            <span class="line-label">在线矿工数提醒</span>
          </div>
          <div class="select-line-right">
            <a-switch v-model="switchVal02"/>
            <span class="switch-option-val">当在线矿工数下降到阈值时我们会即刻提醒</span>
          </div>
          <!-- 开启改功能时候，展示输入框 -->
          <div class="show-input-space" v-show="switchVal02">
            <p class="left-top-label">矿工数</p>
            <div class="input-val-space">
              <a-input v-model="personValCount" id="inputKey" oninput="value=value.replace(/[^\d]/g,'')" placeholder="请输入" />
            </div>
          </div>
        </div>
        <div class="select-line">
          <div class="select-line-left cus-line-left">
            <span class="line-label">实时算力波动提醒</span>
          </div>
          <div class="select-line-right">
            <a-switch v-model="switchVal03"/>
            <span class="switch-option-val">当实时算力下降到阈值时我们会即刻提醒</span>
          </div>
          <!-- 开启改功能时候，展示输入框 -->
          <div class="show-input-space" v-show="switchVal03">
            <p class="left-top-label">实时算力</p>
            <div class="input-val-space">
              <a-input v-model="computingPower" id="inputKey" oninput="value=value.replace(/[^\d]/g,'')" placeholder="请输入" />
            </div>
          </div>
        </div>
        <div class="select-line">
          <div class="select-line-left cus-line-left">
            <span class="line-label">提醒联系人</span>
          </div>
          <div class="select-line-right">
            <p>
              <span class="operation-btn-span">新增联系人</span>
            </p>
            <!-- 可能需要显示添加的联系人 -->
            <div class="show-link-person-space">
              <template v-if="addLinkUsers.length > 0">
                <div class="link-person-line">
                  <span>XXX联系人</span>
                </div>
              </template>
              <template v-if="!addLinkUsers.length">
                <div class="empty-tips">
                  <span>当前没有添加联系人，请添加，否则您将收不到提醒，延误您的处理</span>
                </div>
              </template>
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
        switchVal01: true,
        switchVal02: false,
        switchVal03: false,

        addLinkUsers: [],

        personValCount: null,   // 矿工数量
        computingPower: null, // 实时算力
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
        if (this.switchVal02) {
          // 需要校验
          if (!this.personValCount) {
            this.$message.info('请输入矿工数量');
            return;
          }
        }

        if (this.switchVal03) {
          // 需要校验
          if (!this.computingPower) {
            this.$message.info('请输入实时算力');
            return;
          }
        }
      },

      handleCancel() {
        this.visible = false;
      }
    }
  }

</script>
<style scoped>
  .select-line {
    margin-bottom: 24px;
  }

  .select-line:last-child {
    margin-bottom: 0;
  }

  .select-line-left {
    display: inline-block;
    width: 84px;
    vertical-align: top;
    text-align: end;
  }

  .cus-line-left {
    width: 80px;
    margin-right: 4px;
  }

  .select-line-right {
    display: inline-block;
    width: calc(100% - 84px - 50px);
    margin-left: 48px;
    vertical-align: top;
  }

  .line-label {
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height */
    color: #606266;
  }

  .switch-option-val {
    vertical-align: middle;
    margin-left: 12px;
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height */


    color: #606266;
  }

.operation-btn-span {
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height */

  text-decoration-line: underline;

  color: #00B496;
  cursor: pointer;
}

.empty-tips {
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  /* identical to box height */
  color: #F0515E;
}

.link-person-line {
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
  color: rgba(0, 0, 0, .6);
}

.show-input-space {
  padding-left: 130px;
}

.left-top-label {
  display: inline-block;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height */

  text-align: right;

  color: rgba(0, 0, 0, .5);
}

.input-val-space {
  position: relative;
  margin-top: 4px;
  width: 300px;
}
</style>
