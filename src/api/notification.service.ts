import Vue from 'vue';
export default function NotificationService(){
    let baseUrl:string = 'https://reqres.in/api/users';
    return Vue.axios.get(baseUrl).then(res=>res.data);
}