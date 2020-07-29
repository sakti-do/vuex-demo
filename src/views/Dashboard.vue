<template>
  <div class="home">
    <Notification/>
    -------------------------
    <ul>
        <li v-for="item in userList" :key="item.id" v-on:click="selectAndSync(item.email)">
            {{ item.first_name+' '+item.last_name }}
        </li>
    </ul>
    <!-- <button v-on:click="getNotification">Click me</button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
import Notification from '@/components/Notification.vue'
import NotificationService from '@/api/notification.service';
export default {
    name: 'Dashboard',
    created:async function(){
        let initialData = await NotificationService();
        this.userList = initialData.data;
        this.add(this.userList);
    },
    data:function(){
       return {
           userList:[]
        };
    },
    components: {
        Notification
    },
    methods:{
        ...mapActions({
            add: 'incrementAction', // map `this.add()` to `this.$store.dispatch('increment')`
            select:'selectedAction'
        }),
        selectAndSync(email){
            this.select(email);
        }
    }
}
</script>