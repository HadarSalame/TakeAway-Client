import produce from "immer";
import axios from "axios";

const initialState = {
    B: {

    },
    loginB: false,
    IsBidExist: false
}

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'ADD_PROFESSIONAL':
            {
                state.B = action.payLoad
                state.loginB = true
                console.log(state.B, "state addbusinesstoredux");
            }
            break;
        case 'SINGHOUT_PROFESSIONAL':
            {
                state.loginB = false;

            }
            break;
        case 'UPDATE_PROFESSIONAL':
            {
                state.B = action.payLoad;

            }
            break;
        case 'UPDATE_ISBIDEXIST':
            {
                state.IsBidExist = action.payLoad;
            }
            break;
    }
}, initialState)

export default reducer;