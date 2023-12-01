import { createContext, useReducer } from "react";

const FormContext = createContext();

const initialState = {
    page:1,
    data:null

};

const Reducer = (state,action)=>{
   switch(action.type){
    
    case 'SET_PAGE':
        return {...state,page:action.payload};
    case 'SET_DATA':
        return {...state,data:{...state.data, ...action.payload }};
    case 'SUBMIT_FORM':
        alert(JSON.stringify(state.data, null, 2))
        return state
    default:
        return state;
    }
}

const FormProvider = ({children})=>{
    const [state,dispatch] = useReducer(Reducer,initialState);
    return(
        <FormContext.Provider value={{state,dispatch}}>
            {children}
        </FormContext.Provider>
    )
}

export {FormProvider,FormContext};