import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Users } from '../models/users.inteface';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  
  userForm!: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;
  registros: Array<User> = new Array<User>();

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  ngOnInit(): void {
    this.initForm();
   
  }
  private initForm(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      website: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      phone: ['', Validators.required],
    })
  }
  saveUser(user: User): Observable<User> {
    return this.http.post<User>('https://jsonplaceholder.typicode.com/user',user)
  }
}
