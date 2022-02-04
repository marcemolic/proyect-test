import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //TODO: componentes para navegar 
  navigationExtra: NavigationExtras = {
    state: {
      data: null,
    }
  };
  
  registros: Array<User> = new Array < User >();
  //TODO: arreglo de prueba de muestra de datos 
  fakeArray = [
    {
      name: 'marcelino',
      username: 'marce_molic',
      email: 'marcelino@gmail.com',
      password: 'lalala',
      phone: '554448855'
    },
    {
      name: 'lucia',
      username: 'lucia_molic',
      email: 'lucia@gmail.com',
      password: 'lelele',
      phone: '44556633'
    },
    {
      name: 'Vicente',
      username: 'vicente_molic',
      email: 'Vicente@gmail.com',
      password: 'lilili',
      phone: '11223344'
    }
  ]
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    // TODO:se almacena la api
  this.verUser().subscribe((usersAPI)=>{
    this.registros = usersAPI
  })

  }
  //funciones que guiara al al perfil del cliente

  goToEdit(item: any) {
    console.log(item);
    this.navigationExtra.state!['data'] = item;
    this.router.navigate(['/edit'], this.navigationExtra);
  }

  verUser(): Observable<User[]> {
    // TODO: Se llama la API
   return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
