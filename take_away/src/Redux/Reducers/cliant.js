import produce from "immer";
import axios from "axios";

const initialState = {
    C: {

    }
}

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            {
                state.C = action.payLoad
                console.log(state.C, "state addusertoredux");
            }

            break;
        case 'UPDATE_USER':
            {
                state.claintFirstName = action.payload

                console.log(state.C, "state addusertoredux");
            }

            break;
    }
}, initialState)

export default reducer;