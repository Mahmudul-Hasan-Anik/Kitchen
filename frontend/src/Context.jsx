import { createContext,useReducer } from "react";
const Store = createContext()

//------------ USER CONTEXT -----------//
const userState = {
    user: localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')): null
}

function userReducer(state,action){
    switch(action.type){
        case 'USER_SIGNIN': 
                return {...state, user: action.payload}   
        case 'USER_LOGOUT': 
                return {...state, user: null}   
        default: 
                return state      
    }
    
}

//------------ ADD TO CART -------------//
const cartState = {
    cart:{
        cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')) : []
    }
}

const cartReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_CART_ITEMS':
              const newItem = action.payload
              const existing = state.cart.cartItems.find((item)=>item._id === newItem)
              const cartItems = existing ? state.cart.cartItems.map((item)=>item._id === existing._id ? newItem: item) : [...state.cart.cartItems, newItem]
            
              console.log(cartItems)

        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        return {...state, cart: {...state.cart, cartItems}}

        default: return state
    }
}

const StoreProvider = (props)=>{
    const [state,dispatch] = useReducer(userReducer, userState)
    const [state2, dispatch2] = useReducer(cartReducer, cartState)
    const value = {state,dispatch,state2, dispatch2}

    return(
        <>
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
        </>
    )
}


export { Store, StoreProvider}