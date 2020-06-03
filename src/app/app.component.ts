import { Component } from '@angular/core';
import { CrudService } from './srevice/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';

  name : string;
  mobilenumber : number;
  emailid : string;

   constructor(public crudservice:CrudService){}
   
     SaveRecord()
     {
       let record = {};
       record['name'] = this.name;
       record['mobilenumber'] = this.mobilenumber;
       record['emailid'] = this.emailid;

       this.crudservice.create_newperson(record).then(res =>{
          this.name = "";
          this.mobilenumber = undefined;
          this.emailid = "";
          console.log(res);
       }).catch(error => {
         console.error();
       });
       
     }
   
}
