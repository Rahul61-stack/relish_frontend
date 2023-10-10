let id=0;
function cartreducer(state=[],action){
    if(action.type ==='addToCart'){
        return [...state,
            {
                id:++id,
                name:action.payload.name,
                price:action.payload.price,
                imgurl:action.payload.imgurl
            }
        ]
    }
    else if(action.type ==='removeFromCart'){
        return state.filter((state)=>state.id===action.payload.id)
    }
    else
        return state;
}
function showcartreducer(state=[],action){
    if(action.type ==='showcart'){
        return {cartvisible:action.payload.showcart}
    }
    else
        return state;
}
export default {cartreducer,showcartreducer}