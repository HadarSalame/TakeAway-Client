import produce from "immer";
import axios from "axios";

const initialState = {
    B:{
        // businessName: '',
        // businessOwnerName: '',
        // businessPhone: '',
        // businessEmail: '',
        // businessAddress: '',
        // businessKosher: '',
        // businessId: ''
    }
}

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'ADD_PROFESSIONAL':
            {
                 state.B = action.payLoad
                 console.log(state.B,"state addbusinesstoredux");
                }
            break;
    }
}, initialState)

export default reducer;