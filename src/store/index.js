import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: [],
    userData: {
      name: "",
      address: "",
      phone: ""
    },
    data: {
      name: '',
      address: '',
      phone: ''
    }
  },
  mutations: {
    setData(state, data) {
      state.tableData = data
    },
    // edit(state, data) {
    //   state.tableData = data
    // },
    resetContact(state){
      state.data = {
        name: '',
        address:'',
        phone: ''
      }
    },
    validate(state){
      if(
        state.data.name.length &&
        state.data.address.length &&
        state.data.phone.length > 0
      ){
        state.tambah();
      }
    },
    setContact(state, data){
      
      state.data = {
        name: data.data.name,
        address:data.data.address,
        phone: data.data.phone
      }
    },
    // hapus(state, data) {
    //   state.tableData = data
    // },
    update(state, data) {
      state.userData = data
    },
  },
  actions: {
    async getContact({commit}) {
      const {
        data: { data }
      } = await axios.get("https://address-book-exp-api.herokuapp.com/users");
      commit('setData', data)
    },

    async edit({  dispatch }, id) {
      await axios.get(
        `https://address-book-exp-api.herokuapp.com/users/${id}`
      );
      //const data = response.data
      // commit('edit', data)
      dispatch('getContact', 'getContacts')
    },
    
    async hapus({ dispatch }, id) {
      await axios.delete(
        `https://address-book-exp-api.herokuapp.com/users/${id}`
      );
      dispatch('getContact')
    },

    async tambah({ commit, state, dispatch }) {
      await axios.post("https://address-book-exp-api.herokuapp.com/users", {
        name: state.data.name,
        address: state.data.address,
        phone: state.data.phone
      });
      dispatch('getContact')
      commit('resetContact', 'validate')
    },

    async getContacts({ commit, state }, id) {
      
      //const id = state.$route.params.id
      const { data } = await axios.get(`https://address-book-exp-api.herokuapp.com/users/${id}`);
      commit('setContact', { data, id })
      console.log(data, 'here get', id)
    },

    async update({ state, dispatch, commit }, id) {
      console.log(data, 'here update', id)
      const { data } = await axios.patch(`https://address-book-exp-api.herokuapp.com/users/${id}`, {
        name: state.data.name,
        address: state.data.address,
        phone: state.data.phone
      })
      commit('resetContact', id)
      dispatch('getContact')
    }
  },
  modules: {

  }
})