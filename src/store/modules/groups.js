import axios from 'axios'
export default{
  state: {
    groups:  []
  },
  mutations: {
    updateGroups(state, groups){
      state.groups = groups
    }
  },
  actions: {
    async fetchGroups(ctx){
      const groups = await axios.get("http://localhost:3000/clients")

      ctx.commit('updateGroups', groups.data)
    }
  },
  getters:{
    allGroups(state){
      return state.groups
    }
  },
}