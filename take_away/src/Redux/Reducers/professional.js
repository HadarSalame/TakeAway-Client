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
    },
    loginB:false
}

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'ADD_PROFESSIONAL':
            {
                 state.B = action.payLoad
                 state.loginB=true
                 console.log(state.B,"state addbusinesstoredux");
                }
            break;
            case 'SINGHOUT_PROFESSIONAL':
                {
                     state.loginB = false;

                    }
                break;
    }
}, initialState)

export default reducer;