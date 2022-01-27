import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialogs',
  template: ''
})

export class DialogsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

async  swal(param:any){

    switch (param.dialog) {
      case 'confirm':
        return new Promise((resolve, reject) => {
          Swal.fire({
            title: param.title,
            text: param.message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
          }).then(res => {
            resolve(res.value);
          })


        })
        break;

      case 'success':
        Swal.fire({
          title: param.title,
          text: param.message,
          icon: 'success',
          showCancelButton: false,
          showConfirmButton: false
        })

        setTimeout(() => {
          Swal.close();
        }, 5000);

        break;

      case 'error':
        Swal.fire({
          title: param.title,
          text: param.message,
          icon: 'error',


        })

        break;

      case 'Warning':
        Swal.fire({
          title: param.title,
          text: param.message,
          icon: 'warning',
        })
        break;

      default:

    }
  }



}
