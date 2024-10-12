const actions = {
    removeUser({ commit }, userId) {
        commit('REMOVE_USER', userId);
    },
    addNewUser({commit}, user) {
        commit("ADD_NEW_USER", user);
    }
};

export default actions;