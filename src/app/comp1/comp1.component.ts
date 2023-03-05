import { addPerson } from './../store/store.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { PersonState } from '../store/store.state';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private store : Store<PersonState>) { }

  ngOnInit(): void {
  }

  addCustomer(person:any){
    const pname= person;
    this.store.dispatch(addPerson({pname}))
    //console.log(person);
  }
}
