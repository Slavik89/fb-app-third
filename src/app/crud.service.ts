import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  footUrl = "https://v3.football.api-sports.io/teams?id=33";
  footOptionsObject = {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "a3a632238a0aa62bbd0bd3bdb0c8c757"
    }
  }

  constructor(public fireService: AngularFirestore, private http: HttpClient ) { }

  getAllNAmes() {
    return this.fireService.collection('names').snapshotChanges();
  }

  getTeamInfo() {
    return this.http.get(this.footUrl, this.footOptionsObject)
    .pipe(
      map(data => data['response']),
      tap(newData => console.log(newData)),
      // catchError(this.handleError('getHeroes', []))
    );;
  }

  addSubject(record) {
    return this.fireService.collection('course').add(record);
  }

  create_Newemployee(Record)
  {
    return this.fireService.collection('course').add(Record);
  }

  get_Allemployee()
  {
    return this.fireService.collection('course').snapshotChanges();
  }

  update_employee(recordid, record)
  {
    this.fireService.doc('course/' + recordid).update(record);
  }

  delete_employee(record_id)
  {
    this.fireService.doc('course/' + record_id).delete();
  }

}
