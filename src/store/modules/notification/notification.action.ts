
export const increment = function(context:any,payload:any) {
    context.commit('incrementMutation',payload);
}
export const selected = function (context:any,payload:any){
    context.commit('selectedMutation',payload);
}