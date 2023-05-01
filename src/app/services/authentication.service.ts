import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import $ from "jquery";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  // modify the return type to properly use the full response
  login(username: string, password: string): Observable<any> {
    const loginUrl = 'https://reqres.in/api/login';
    const reqBody = {
      email: username,
      password: password,
    };
    return this.http.post(loginUrl, reqBody);
  }

  userDetails(token: string): Observable<any> {
    const url = 'https://reqres.in/api/unknown ';
    const options = {
      headers: {
        Authorization: 'Bearer ' + token,

        'Content-type': 'application/json',
      },
    };
    return this.http.get(url, options);
  }

  showNotifier(message, type, timer: number = 3000) {
    let color = '';
    if (type === 'error') {
      color = 'danger';
    } else if (type === 'warning') {
      color = 'warning';
    } else if (type === 'info') {
      color = 'info';
    } else if (type === 'success') {
      color = 'success';
    }

    $['notify']({
      icon: 'notifications',
      message: message

    }, {
      type: color,
      delay: timer,
      timer,
      placement: {
        from: 'top',
        align: 'right'
      },
      template: '<div id="protract-toastr-error-message" data-notify="container" class="col-xl-4 col-lg-4' +
        'col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close ' +
        'mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar"' +
        'aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }
}
