const initialstate={
    cart:[]
}
const Reducers=(state=initialstate,action)=>{
    switch(action.type){
        case "Add_to_cart":
let cartindex=state.cart.findIndex((item)=>item.id==action.payload.id)
        if(cartindex>=0){
            state.cart[cartindex].Quantity+=1
        }
        else{
            let data={...action.payload,Quantity: 1}
            return{
                ...state,
                cart:[...state.cart,data]


                
            }
        }
          
            case "Remove_from_cart":
                let data =state.cart.filter((val)=>val.id != action.payload)

                return{
                    ...state,
                    cart:data
                }
            
        case "DescQuantity":
        let descquanindex=state.cart.findIndex((item)=>item.id===action.payload.id)
                if(state.cart[descquanindex].Quantity>=1){
                    state.cart[descquanindex].Quantity-=1
            
                    return{
                        ...state,
                        cart:[...state.cart] 
                }
            }

                else if(state.cart[descquanindex].Quantity===1){
                    let data=state.cart.filter((val)=>val.id!=action.payload)
                    return{
                        ...state,
                        cart:data
                    }
                }
                default:
                return state
    }

}
export default Reducers