import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../models/users.inteface';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  //valor para recibir la id
  users: Users;
  userForm!: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;
  constructor(private router: Router, private fb: FormBuilder, private msg: MessageService) {
    //TODO: se recoge el valor de state y se almacena en el users
    const navigation = this.router.getCurrentNavigation();
    // TODO: se recoge si tiene valor
    this.users = navigation?.extras?.state?.['data'];

  }

  ngOnInit(): void {
    //TODO: inicializamos el requerimiento de formulario
    this.initForm();
    //TODO: REvisar si users tiene datos 
    if ( typeof this.users === 'undefined') {
      //redirigir
      this.msg.messageError('Error!', 'no se encuentra registro');
      this.router.navigate(['/home'])
    }else{
      this.userForm.patchValue(this.users)
    }

  }
  // TODO: se creae los requerimientos de formulario
  private initForm(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      website: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      phone: ['', Validators.required],
    })
  }


  // LIST:  funcionesde form
  goToDelete() {
    this.msg.messageSuccess('Borrado','Simulacion de borrar realizada');
    this.router.navigate(['home']);
  }
  goToBack() { //TODO: retocede a la pagina anterior

    this.router.navigate(['home']);
  }
  editRegister() {
    console.log(this.userForm.value);
    this.msg.messageSuccess('Editado', 'Simulacion de edicion realizada');
  }
}
