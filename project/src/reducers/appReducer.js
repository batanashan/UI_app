 export const appReducer = (state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                isLogedIn:action.payload
            }
default:
    return state;
    }

}