import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Users } from './components/models/users.inteface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyect-test';
  usuarios!: any;
  
  //TODO: definir el usuario
  constructor(public auth: Auth, ){
   usuario: auth.currentUser;
  }


}
