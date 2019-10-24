import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        items:{},
        Sorteditems:{}
    },
    mutations:{
        updateItems(state, items){
            state.items = items;
            state.Sorteditems = items;
        }
    },
    actions : {
        async loadItems({commit}){
            let result = await axios.get("./mockup.json");
            console.log("데이터 읽기 결과 = ", result);
            commit("updateItems", result.data.list);
        }
    },
}) 

export default store; 