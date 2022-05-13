import axios from "axios";
import {ALL_USERS, BASE_URL, DETECT_STEP, SINGLE_USER, UPDATE_SINGLE_USER} from "../helpers/constants";


export const fetchData = () => dispatch => {
    axios.get(
        BASE_URL, {params: {results: 15}}
    )
        .then(result => {
            let newRes = result.data.results.map((user, index) => ({
                id: index,
                firstName: user.name.first,
                lastName: user.name.last,
                email: user.email,
                dob: new Date(user.dob.date).toISOString().split('T')[0],
                gender: user.gender,
                location: {
                    address: `${user.location.street.number}, ${user.location.street.name}`,
                    city: user.location.city,
                    state: user.location.state,
                    country: user.location.country,
                    postalCode: user.location.postcode
                },
                picture: user.picture.large
            }))
            dispatch({
                type: ALL_USERS,
                payload: newRes
            })
        })
        .catch(e => console.log(e))
}

export const selectSingleUser = (id) => dispatch => {
    dispatch({
        type: SINGLE_USER,
        payload: id
    })
}
export const updateSingleUser = (firstName, lastName, email, dob, gender,
                                 address, city, state, country, postalCode, picture) => dispatch => {
    dispatch({
        type: UPDATE_SINGLE_USER,
        firstName: firstName,
        lastName: lastName,
        email: email,
        dob: dob,
        gender: gender,
        address: address,
        city: city,
        state: state,
        country: country,
        postalCode: postalCode,
        picture: picture
    })
}
