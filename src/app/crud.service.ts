import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireService: AngularFirestore) { }

  getAllNAmes() {
    return this.fireService.collection('names').snapshotChanges();
  }
}
