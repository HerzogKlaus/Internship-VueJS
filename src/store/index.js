import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },

  getters: {
    clientGetter(state) {
      return state.clientArray;
    },
    groupGetter(state) {
      return state.groupArray;
    }
  },

  mutations: {
    clientMutation(state, clientArray) {
      state.clientArray = clientArray;
    },
    groupMutation(state, groupArray) {
      state.groupArray = groupArray;
    }
  },

  actions: {
    clientArrayFormation(context) {
      const clientArray = [
        {
          name: "Клиент-1",
          phone: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ",
          enable: false
        },
        {
          name: "Клиент-2",
          phone: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ",
          enable: false
        },
        {
          name: "Клиент-3",
          phone: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ",
          enable: false
        },
        {
          name: "Клиент-4",
          phone: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ",
          enable: false
        },
        {
          name: "Клиент-5",
          phone: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ",
          enable: false
        },
        {
          name: "Клиент-6",
          phone: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ",
          enable: false
        },
        {
          name: "Клиент-7",
          phone: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ",
          enable: false
        },
        {
          name: "Клиент-8",
          phone: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ",
          enable: false
        },
        {
          name: "Клиент-9",
          phone: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ",
          enable: false
        },
        {
          name: "Клиент-10",
          phone: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ",
          enable: false
        }
      ];
      context.commit("clientMutation", clientArray);
    },
    groupArrayFormation(context) {
      const groupArray = [
        { name: "Группа-1" },
        { name: "Группа-2" },
        { name: "Группа-3" },
        { name: "Группа-4" },
        { name: "Группа-5" },
        { name: "Группа-6" },
        { name: "Группа-7" },
        { name: "Группа-8" },
        { name: "Группа-9" },
        { name: "Группа-10" }
      ];
      context.commit("groupMutation", groupArray);
    }
  }
});
