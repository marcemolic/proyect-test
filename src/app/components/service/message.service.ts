import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  messageError(title:string, msg:string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: msg,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ok!',
    })
  }
  messageSuccess(title:string, msg: string) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: msg,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ok!',
    })
  }

}
