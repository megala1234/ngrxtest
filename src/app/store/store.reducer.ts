import { initialState } from "./store.state";
import {createReducer,on } from '@ngrx/store'
import { addPerson } from "./store.action";

const addPersonReducer = createReducer(
    initialState,
    on(addPerson, (state,action) => {
        //console.log(action.pname)
        const newName = action.pname;
        return {
            ...state,
            personnames:[...state.personnames, newName]
        }
    }
    )
);

export function personReducer(state:any,action: any) {
    return addPersonReducer(state, action);
}