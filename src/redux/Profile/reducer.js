import { DatabaseProfile } from "./database";


const initialState = {
    TEST: null
}

export const GetProfile = (state = initialState, action) => {
    switch (action.type) {
        case DatabaseProfile.GET_PROFILE: 
            return {
                ...state,
                TEST: action.payload
            }
        default: return state;
    }
}