<!--
 * @Author: your name
 * @Date: 2022-05-04 16:22:16
 * @LastEditTime: 2022-05-04 18:34:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/views/modalView/components/ModalView02 copy.vue
-->
<!-- 双重验证部分弹出框 -->
<template>
  <a-modal
      title="开启双重验证"
      :visible="visible"
      @cancel="handleCancel"
      width="540px"
    >
    <!-- 自定义页脚部分 -->
      <template slot="footer">
        <a-button key="back" @click="handlePreStep" v-show="stepIndex === 2">
          上一步
        </a-button>
        <a-button key="submit" type="primary"  @click="handleNextStep">
          {{ stepIndex === 1 ? '下一步' : "开启双重验证" }}
        </a-button>
      </template>

      <!-- 界面内容主题部分 -->
      <div class="modal-body-content">
        <div class="step-01-body" v-show="stepIndex === 1">
          <p class="step-01-head-desc">请使用您手机上的谷歌身份验证器（Google Authenticator）或其他兼容应用程序扫描下方二维码，也可以手动输入以下16位密钥</p>

          <div class="step-01-main-content">
            <div class="step-01-left">
              <p class="left-top-label">二维码</p>
              <div class="canvas-code">
                <div class="canvas-code-box"></div>
              </div>
            </div>
            <div class="step-01-right">
              <p class="left-top-label">密钥</p>
              <div class="input-val-space">
                <a-input id="inputKey" placeholder="请输入" v-model="keyVal"/>
                <span class="operation-text" @click="handleCopyValClick">复制</span>
              </div>
            </div>
          </div>

          <div class="tips-msg">
            <span class="circle-tips-icon"></span>
            <span class="tips-msg-content">请妥善保存密钥，避免被盗或丢失。如遇手机丢失等情况，可通过该密钥恢复您的谷歌验证。如密钥丢失，需要提交工单通过人工客服重置，处理时间需7天</span>
          </div>
        </div>
        <!-- 第二步布局内容 -->
        <div class="step-01-body" v-show="stepIndex === 2">
          <div class="open-setting-item">
            <p class="setting-item-label">登录密码</p>
            <div class="input-setting-space">
              <a-input-password  v-model="stepVal01" placeholder="请输入登录密码" class="custom-input-cls"/>
            </div>
          </div>
          <div class="open-setting-item">
            <p class="setting-item-label">验证码</p>
            <div class="input-setting-space">
              <a-input v-model="stepVal02" placeholder="请输入验证码" class="custom-input-cls"/>
              <span class="load-verify-code-text" v-show="!loadVerifyBtn" @click="handleGetVerifyCode">获取验证码</span>
              <span class="load-verify-code-text cus-span-val" v-show="loadVerifyBtn">{{ countTime }}s</span>

              <span class="tips-msg" @click="handleNoLoadVerifyCode">无法获取验证码？</span>
            </div>
          </div>
          <div class="open-setting-item">
            <p class="setting-item-label">双重验证动态口令</p>
            <div class="input-setting-space">
              <a-input v-model="stepVal03" placeholder="Password" class="custom-input-cls"/>
              <span class="tips-msg" @click="handleNoLoadCode">无法获取口令？</span>
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
        keyVal: "afsalfbsalfbsa",   // 密钥值
        stepIndex: 1, // 当前第一步布局内容

        stepVal01: "",    // 登录密码
        stepVal02: "",  // 验证码
        stepVal03: "",    // 动态口令

        countTime: 60,
        loadVerifyBtn: false,
        timer: null
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
      this.$once("hook:beforeDestroy", () => {
        if (this.timer) {
          window.clearInterval(this.timer);
          this.timer = null;
        }
      })
    },
    methods: {
      handleNextStep() {
        if (this.stepIndex === 2) {
          // 此时是保存操作

          return;
        }

        this.stepIndex ++;
      },

      handlePreStep() {
        this.stepIndex --;
      },

      // 获取验证码
      handleGetVerifyCode() {
         console.log("点击调用接口，获取短信验证码")
        this.loadVerifyBtn = true;

        if (this.timer) {
          window.clearInterval(this.timer);
          this.timer = null;
        }

        this.timer = window.setInterval(() => {
          if (this.countTime === 1) {
            this.loadVerifyBtn = false;
            window.clearInterval(this.timer);
            this.timer = null;
          }

          this.countTime -= 1;
        }, 1000)
      },

      handleCancel() {
        this.visible = false;
      },

      // 实现拷贝功能
      handleCopyValClick() {
        // 复制保存值
        let text = this.keyVal;
        if (navigator.clipboard) {
            // clipboard api 复制
            navigator.clipboard.writeText(text);
        } else {
            let textarea = document.createElement('textarea');
            document.body.appendChild(textarea);
            // 隐藏此输入框
            textarea.style.position = 'fixed';
            textarea.style.clip = 'rect(0 0 0 0)';
            textarea.style.top = '10px';
            // 赋值
            textarea.value = text;
            // 选中
            textarea.select();
            // 复制
            document.execCommand('copy', true);
            // 移除输入框
            document.body.removeChild(textarea);
        }

        this.$message.success('复制成功');
      },

      // 无法获取验证码点击事件
      handleNoLoadVerifyCode() {
         console.log("无法获取验证码点击事件")
      },

      handleNoLoadCode() {
        console.log("无法获取口令")
      }
    }
  }

</script>
<style scoped>
.step-01-head-desc {
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #606266;
}

.step-01-main-content {
  font-size: 0;
  margin-top: 26px;
}

.step-01-left {
  display: inline-block;
  width: 140px;
  vertical-align: top;
  text-align: start;
}

.left-top-label {
  display: inline-block;
}

.step-01-right {
  display: inline-block;
  width: calc(100% - 140px - 30px);
  vertical-align: top;
  margin-left: 30px;
}

.left-top-label {
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height */

  text-align: right;

  color: #606266;
}

.cus-span-val {
  cursor: not-allowed;
}

.canvas-code {
  margin-top: 8px;
}

.canvas-code-box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: #D8D8D8;
}

.input-val-space {
  position: relative;
}

.operation-text {
  position: absolute;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  color: #00B496;
  right: 14px;
  margin-top: 6px;
  cursor: pointer;
}

.tips-msg {
  margin-top: 30px;
}

.circle-tips-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #CCCCCC;
  box-sizing: border-box;
  border-radius: 50%;
  vertical-align: middle;
}

.tips-msg-content {
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #606266;
  vertical-align: middle;
  margin-left: 10px;
}

.setting-item-label {
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  /* identical to box height, or 100% */
  text-transform: uppercase;
  color: #999999;
}

.input-setting-space {
  position: relative;
  margin-top: 12px;
}

.custom-input-cls {
  display: inline-block;
  width: 380px;
}

.load-verify-code-text {
  position: absolute;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  /* identical to box height, or 167% */
  text-align: right;
  color: #00B496;
  right: 120px;
  margin-top: 6px;
  cursor: pointer;
}

.open-setting-item {
  margin-bottom: 32px;
}

.open-setting-item:last-child {
  margin-bottom: 0;
}

.tips-msg {
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  /* identical to box height, or 167% */
  color: #999999;
  vertical-align: middle;
  margin-left: 10px;
  cursor: pointer;
}
</style>
