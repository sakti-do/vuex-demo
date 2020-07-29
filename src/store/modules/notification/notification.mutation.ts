export const increment = function (state:any,payload:any) {
    // mutate state
    state.noti_list = payload;
}
export const selected = function (state:any,payload:any){
    state.selectedNoti = payload;
}