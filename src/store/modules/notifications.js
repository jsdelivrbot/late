//New code
const defaultDuration = 8000;
//End


const state = {
  list: []
};

const getters = {};

//New code
const actions ={
  Add({ commit } , notification){

    let duration = notification.duration || defaultDuration;
    var timeOut = setTimeout(function () {
      commit('REMOVE_NOTIFICATION', notification);
    }, duration);

    commit('ADD_NOTIFICATION', {
      Raw: notification,
      TimeOut: timeOut
    });
  },

  Dismiss(context, notification){
    context.commit('REMOVE_NOTIFICATION', notification);
  }
};
//End
const mutations = {
  ADD_NOTIFICATION: (state, notification) => {
    state.list.push(notification);
  },
  //Edited Code
  REMOVE_NOTIFICATION: (state, rawNotification) => {
    var i = state.list.map(n=> n.Raw).indexOf(rawNotification);
    if (i == -1){
      return;
    }
    clearTimeout(state.list[i].TimeOut);
    state.list.splice(index, 1);
  }
  //End
};

export default {
  state,
  getters,
  actions,
  mutations
};