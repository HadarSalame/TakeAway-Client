import produce from "immer";
import axios from "axios";

const initialState = {
    C: {

    },
    loginClient:false
}

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            {
                state.C = action.payLoad
                state.loginClient=true;
                
                console.log(state.C, "state addusertoredux");
            }

            break;
        case 'UPDATE_USER':
            {
                state.claintFirstName = action.payload

                console.log(state.C, "state addusertoredux");
            }

            break;
            case 'SINGHOUT_CLIENT':
                {
                    state.loginClient=false;
                }
    
                break;
    }
}, initialState)

export default reducer;