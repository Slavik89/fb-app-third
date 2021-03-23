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

  course: any;
  courseName: string;
  message: any;

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

    this.crudService.get_Allemployee().subscribe(data => {

      this.course = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['name'],          
        };
      })
      console.log(this.course);

    });
    

  }

  postSubject() {
    console.log('Inside post subject');
    this.crudService.addSubject(this.record[1]).then(res => {
      console.log(res);
  }).catch(error => {
    console.log(error);
    });
  }

  CreateRecord()
  {
    let Record = {};
    Record['name'] = this.courseName;    

    this.crudService.create_Newemployee(Record).then(res => {
        this.courseName = "";        
        console.log(res);
        this.message = "Employee data save Done";
    }).catch(error => {
      console.log(error);
    });
    
  }

  EditRecord(Record)
  {
    Record.isedit = true;
    Record.editname = Record.name;
    Record.editage = Record.age;
  }

  Updatarecord(recorddata)
  {
    console.log(recorddata);
    let record = {};
    record['name'] = recorddata.editname;    
    this.crudService.update_employee(recorddata.id, record);
    recorddata.isedit = false;
  }

  Deleteemployee(record_id)
  {
    console.log(record_id);
    this.crudService.delete_employee(record_id);
  }




}
