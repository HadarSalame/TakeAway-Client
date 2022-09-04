import { Produce } from "immer";
import axios from "axios";

const initialState = {
   price:0,
    
    }

    export default reducer = Produce((state, action) => {
        switch (action.type) {
            case 'UPDATE_PRICE':
                {state.price=action.payload}
                break;
    }
    }, initialState)