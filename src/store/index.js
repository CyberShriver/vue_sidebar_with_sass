import { createStore } from "vuex";

export default createStore({
  state: {
    wrapModal:null,
    isModalActive:null,
    is_expanded :localStorage.getItem("is_expanded") === "true"
   },
  mutations: {
    WRAP_MODAl(state){
      state.wrapModal=!state.wrapModal
    },
    SIDE_BAR(state){
      state.is_expanded= !state.is_expanded
		localStorage.setItem("is_expanded",state.is_expanded)
    },
    TOGGLE_MODAL(state){
      state.isModalActive=!state.isModalActive
    }
  },
  actions: {},
  modules: {},
});
