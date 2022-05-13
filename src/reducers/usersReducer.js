import {ALL_USERS, SINGLE_USER, UPDATE_SINGLE_USER} from "../helpers/constants";

const initState = {
    usersList: [],
    singleUser: {},
    step: 0
};

export const usersReducer = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ALL_USERS:
            return {...state, usersList: payload}
        case SINGLE_USER:
            let tempArr = [...state.usersList]
            let tempUser = tempArr.find(tempArr => tempArr.id === payload)
            return {...state, singleUser: tempUser}
        case UPDATE_SINGLE_USER:
            let updatedUser = {
                id: state.singleUser.id,
                firstName: action.firstName,
                lastName: action.lastName,
                email: action.email,
                dob: action.dob,
                gender: action.gender,
                location: {
                    address: action.address,
                    city: action.city,
                    state: action.state,
                    country: action.country,
                    postalCode: action.postalCode
                },
                picture: action.picture
            }
            return {...state, singleUser: updatedUser}
        default:
            return state;
    }
}