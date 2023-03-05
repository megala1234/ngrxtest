import { PersonModel } from './../model/person.model';
import { createAction, props} from '@ngrx/store'


 export const addPerson = createAction('[Person] Add Names',props<{pname:PersonModel}>());