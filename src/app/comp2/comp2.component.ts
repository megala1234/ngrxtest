import { PersonModel } from './../model/person.model';
import { getPersonName } from './../store/store.selector';
import { PersonState } from './../store/store.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private store: Store<PersonState>) { }
  persons$!:PersonModel[];
  ngOnInit(): void {

    this.store.select(getPersonName).subscribe(data =>{
     console.log(data);
      this.persons$ = data ;
    })
    
  }

}
