import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices:AngularFirestore) { }

create_newperson(record)
{
  return this.fireservices.collection('Person').add(record);
}

}
