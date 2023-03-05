import { PersonState } from './store.state';
import { createFeatureSelector, createSelector } from '@ngrx/store'

 const getSelectors = createFeatureSelector<PersonState>('personnames');

 export const getPersonName = createSelector(getSelectors,state=>{
    //console.log('selector',state)
    return state.personnames;
 })

