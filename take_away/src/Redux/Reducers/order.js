import produce from "immer";
import axios from "axios";
const initialState = {
    O: {

    }

}

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'ADD_TO_ORDER':
            {
                state.O = action.payLoad
                console.log(state.C,"state addordertoredux");

            }
            break;
    }
}, initialState)

export default reducer;
