const actions = {
    removeUsers({ commit }, userId) {
        commit('REMOVE_USERS', userId);
    },
    addNewUser({commit}, user) {
        commit("ADD_NEW_USER", user);
    }
};

export default actions;