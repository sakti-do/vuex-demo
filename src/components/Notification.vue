<template>
  <div>
    <ul>
      <li v-for="item in notificationListA" :key="item.id" :class="slectedNoti==item.email?'active':''">
        {{ item.first_name+' '+item.last_name }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { mapState } from 'vuex'
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  computed: mapState({
    // arrow functions can make the code very succinct!
    notificationList: function(state:any) {
      return state.notification.noti_list
    },
    selectedNotification: function(state:any) {
      this.$data.slectedNoti = state.notification.selectedNoti
    }
  }),
  watch:{
    selectedNotification:function(newValue, oldValue){
      this.$data.slectedNoti = newValue;
    },
    notificationList:function(nv,ov){
      this.$data.notificationListA = nv;
    }
  }
})
export default class Notification extends Vue {
  //@Prop() private msg!: string;
  notificationListA:Array<object> = [];
  slectedNoti:string = '';
  created(){
    this.notificationListA = this.$store.state.notification.noti_list;
  }
}
</script>
<style scoped>
.active{
  background: red;
}
</style>