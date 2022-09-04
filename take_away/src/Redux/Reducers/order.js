import { Produce } from "immer";
import axios from "axios";
const initialState = {
orderDish:[{}],
numInvited:0,

}

export default reducer = Produce((state, action) => {
    switch (action.type) {
        case 'ADD_TO_ORDER':
            {state.orderDish.push(action.payload)}
            break;
}
}, initialState)

