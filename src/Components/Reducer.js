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