/*
 * @Author: your name
 * @Date: 2022-04-23 09:02:24
 * @LastEditTime: 2022-04-23 10:50:25
 * @LastEditors: Please set LastEditors
 * @Description: 国际化语言相关内容设置
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/i18n.js
 */
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages;
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'zh',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'zh',
  messages: loadLocaleMessages()
})
