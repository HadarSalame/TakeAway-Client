export function addUser(newUser){
    return{type:'ADD_USER',payLoad:newUser}
}

export function updateUser(user){
    return{type:'UPDATE_USER',payLoad:user}
}

export function addProfessional(newProfessional){
    return{type:'ADD_PROFESSIONAL',payLoad:newProfessional}
}

export function updateProfessional(Professional){
    return{type:'UPDATE_PROFESSIONAL',payLoad:Professional}
}


//order
export function addToOrder(dish){
    return{type:'ADD_TO_ORDER',payLoad:dish}
}

//bid
export function addToOrder(p){
    return{type:'UPDATE_PRICE',payLoad:p}
}