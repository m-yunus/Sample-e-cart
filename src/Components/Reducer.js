export const CartReducer=(state,action)=>{

    switch (action.type) {
        case "ADD_To_Cart":
            return{...state,Cart:[...state.Cart,{...action.payload,qty:1}]};
    case "Remove_from_Cart":
            return{...state,Cart:state.Cart.filter(c=>c.id!==action.payload.id)}
          
    
        default:
            return state;
    }

}

export const productReducer=(state,action)=>{
switch (action.type) {
    case "SORT_BY_PRICE":
        return {...state,sort:action.payload }
        case "FILTER_BY_STOCK":
            return {...state,byStock:!state.byStock}
            case "FILTER_BY_DELIVERY":
                return {...state,byFastDelivery:!state.byFastDelivery}
                case "FILTER_BY_RATING":
                    return {...state,byRating:action.payload}
                    case "FILTER_BY_SEARCH":
                        return {...state,searchQuery:action.pay}
                        case "CLEAR_FILTERS":
                            return {
                                byStock:false,
                                byFastDelivery:false,
                                byRating:0,
                                searchQuery:"",
                            }
                        default:
        return  state
}

}