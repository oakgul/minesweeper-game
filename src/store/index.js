import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score : 0,
    // puan : 0,
    data : [],
    names : [],
    points : [],
    // nameInput : '',
    modalShow : false,
    quareCount : null,
  },
})
