import { PersonModel } from "../model/person.model";

export interface PersonState{
    personnames:PersonModel[];
}

export const initialState: PersonState = {
    personnames:[]
    
}