import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  courses: any[];
  team;
  listOfTeams;
  record = [{subject: "math"}, {subject2: "chemistry"}];

  

  // todo = this.store.collection('todo').valueChanges({ idField: 'id' })

  items: Observable<any[]>;
  constructor(public crudService: CrudService) {
    // this.items = db.collection('names').snapshotChanges();
  }

  ngOnInit() {
    /*
    this.crudService.getAllNAmes().subscribe(data =>{
      this.courses = data.map(e => e.payload.doc.data()['1']);
      // this.courses = data;
      // console.log(this.courses);
    });
    */

    /* this.crudService.getTeamInfo().subscribe(data => {
      this.listOfTeams = data;
      console.log(this.listOfTeams);
    }); */

    // this.listOfTeams = this.crudService.getTeamInfo()['response'];
    

  }

  postSubject() {
    console.log('Inside post subject');
    this.crudService.addSubject(this.record[1]).then(res => {
      console.log(res);
  }).catch(error => {
    console.log(error);
    });
  }



}
