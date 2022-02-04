import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/components/service/message.service';

import { LoginData } from '../models/loginData';
import { LoginfireService } from '../services/loginfire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  // TODO: datos de salida
  // @Output() loginFormData: EventEmitter<{
  //   email: string;
  //   password: string;
  // }> = new EventEmitter();

  loginForm!: FormGroup;


  constructor(private fb: FormBuilder,
    // TODO: componentes de la funcionalidad del login
    private readonly authService: LoginfireService,
    private readonly router: Router, private msg: MessageService
    ) { }

  ngOnInit(): void {

    this.initFormLogin();
    
  }
  //TODO: inicializacion del login
  private initFormLogin() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.compose([Validators.required, Validators.email])]],
      password: ['', [Validators.required]]
    })
  }
  // getEmail() {
  //   return this.loginForm.get('email');
  // }

  // getpassword() {
  //   return this.loginForm.get('password');
  // }
    
  
  onLogin() {
    this.authService
      .onlogin(this.loginForm.value)
      .then(() => {
        this.router.navigate(['/home'])
        this.msg.messageSuccess('Hecho!','sesion iniciada')
      })
      .catch(()=> this.msg.messageError('Ingreso no valido','El usuario o contraseña es incorrecta') ) 
  }

// ? TODO: Procesando Login
  // login(loginData: LoginData) {
    
  // }

}
