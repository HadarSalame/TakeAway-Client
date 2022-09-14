import produce from "immer";
import axios from "axios";

const initialState = {
    Bi: {

    }

}

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'UPDATE_PRICE':
            { state.Bi.price = action.payload }
            break;
        case 'ADD_BID': {
            state.Bi= action.payLoad
            console.log(state.Bid, "state addusertoredux");
        }
            break;
    }
}, initialState)

export default reducer;