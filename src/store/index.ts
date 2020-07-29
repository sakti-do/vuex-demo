import Vue from 'vue'
import Vuex from 'vuex'
import { notificationModule } from '@/store/modules/notification/notification.module';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notification: notificationModule
  }
});