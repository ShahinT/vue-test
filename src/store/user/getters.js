const getters = {
  getUserAge: state => userId => {
    const user = state.users.find(user => user.id === userId);
    if (user) {
      return new Date().getFullYear() - new Date(user.birthDate).getFullYear();
    }
    return 0;
  }
};

export default getters;