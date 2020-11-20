import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pathName: "sup",
    list: [1,2,3,4]
  },
  mutations: {
    updateDemoPosition (state, payload) {
      console.log(payload)
      state.pathName = payload
    },
    getUserIsLeader (state) {
      Vue.$axios.post({
        url: 'loadCurrentUserIsLeader',
        data: {},
        tip: false
      }).then((res) => {
        state.isLeader = res.payload
      })
    }
  },
  actions: {
    updateDemoPosition ({commit}, top) {
      commit({type: 'updateDemoPosition', top: top})
    },
    IsUserInfo (obj) {
      obj.commit('getUserIsLeader')
    }
  },
  modules: {
  }
})
