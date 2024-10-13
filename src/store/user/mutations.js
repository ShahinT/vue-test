import {generateId} from "@/utility/utility";

const mutations = {
    REMOVE_USERS: (state, userIds) => {
        state.users = state.users.filter(user => !userIds.includes(user.id));
    },
    ADD_NEW_USER: (state, user) => {
        state.users.push({
            id: generateId(10),
            firstName: user.firstName,
            lastName: user.lastName,
            birthDate: user.birthDate,
            profession_id: Number(user.profession_id),
            country_id: Number(user.country_id),
            quote: user.quote,
        });
    }
};

export default mutations;