export function addUser(newUser){
    return{type:'ADD_USER',payLoad:newUser}
}

export function updateUser(user){
    return{type:'UPDATE_USER',payLoad:user}
}

export function signhoutClient(Professional){
    return{type:'SINGHOUT_CLIENT',payLoad:Professional}
}

export function addProfessional(newProfessional){
    return{type:'ADD_PROFESSIONAL',payLoad:newProfessional}
}

export function updateProfessional(Professional){
    return{type:'UPDATE_PROFESSIONAL',payLoad:Professional}
}
export function signhoutProfessional(Professional){
    return{type:'SINGHOUT_PROFESSIONAL',payLoad:Professional}
}
export function IsBidExistProfessional(Professional){
    return{type:'UPDATE_ISBIDEXIST',payLoad:Professional}
}


//order
export function addToOrder(dish){
    return{type:'ADD_TO_ORDER',payLoad:dish}
}

//bid
export function updatePrice(p){
    return{type:'UPDATE_PRICE',payLoad:p}
}
export function addBid(newBid){
    return{type:'ADD_BID',payLoad:newBid}
}