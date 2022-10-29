const Reducer = (state, action)=>{
    switch (action.type){
        case "ADD_TO_CART":
            return {
                products: [action.payload, ...state.products],
            }
        case "UPDATE_CART":
            return {
                products: action.payload,
            }
        case "CLEAR_CART":
            return {
                products : [],
            }
        case "DELETE_ITEM":
            return {
                products : [...state.products.filter((item)=>item.id !== action.payload)],
            }
        default :
            return state;
    }
}

export default Reducer;