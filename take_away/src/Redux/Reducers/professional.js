import { Produce } from "immer";
import axios from "axios";

const initialState = {
    B:[{
    businessName:'',
    businessOwnerName:'',
    businessPhone:'',
    businessEmail:'',
    businessAddress:'',
    businessKosher:'',
    businessId:''
    }]
    }

    export default reducer = Produce((state, action) => {
        switch (action.type) {
            case 'ADD_PROFESSIONAL':
                {state.businessName=action.payload}
                break;
    }
    }, initialState)