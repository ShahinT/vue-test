import {generateId} from "@/utility/utility";

const mutations = {
    REMOVE_USER: (state, userId) => {
        state.users = state.users.filter(user => user.id !== userId);
    },
    ADD_NEW_USER: (state, user) => {
        console.log(user)
        state.users.push({
            id: generateId(10),
            firstName: user.firstName,
            lastName: user.lastName,
            birthDate: user.birthDate,
            profession_id: user.profession_id,
            country_id: user.country_id, //TODO: make dynamic
            quote: user.quote,
        });
    }
};

export default mutations;