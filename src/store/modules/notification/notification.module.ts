import { increment as incrementAction, selected as selectedAction } from '@/store/modules/notification/notification.action';
import { increment as incrementMutation, selected as selectedMutation } from '@/store/modules/notification/notification.mutation';
import { filterNotifictionList } from '@/store/modules/notification/notification.gretter';
export const notificationModule = {
  state: () => ({
    noti_list:[],
    selectedNoti:''
  }),
  mutations: {
    incrementMutation,
    selectedMutation
  },
  actions: {
    incrementAction,
    selectedAction
  },
  getters: {
    filterNotifictionList
  }
}