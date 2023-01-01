let defaultcity='北京'
try{
    if(localStorage.city){/*方式出现特殊情况,这样作更加保守*/
        defaultcity=localStorage.city
    }
}catch (e){console.log(e);}

export const city={
    state:{
        city:defaultcity
     },
     getters:{/* 相当于computed Header组件使用了 */
       doubleCity(state){
         return state.city+' '+state.city
       }
     },
     mutations:{
        citys(state,payload){
            state.city=payload
            try{
                localStorage.city=payload
            }catch (e){console.log(e);}
        }
     },
     actions:{
        citys(context,name){
           context.commit('citys',name)
        }
     },
     
}