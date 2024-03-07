import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userData: User = { id:0,userName: '', password: '' }
  isUserName: boolean = true;
  isPassword: boolean = true;
  users: User[] = [{ id:1,userName: 'Gad', password: '1234' }, {id:2, userName: 'Dan', password: 'ge564' }, { id:3,userName: 'Noam', password: '8765tfd' }]

  loginClick() {

    if (this.users.findIndex(u => this.userData.userName == u.userName && this.userData.password == u.password) >= 0) {
      alert(`Wellcome ${this.userData.userName}!!`)
    }
    else{
    if (this.userData.userName == '')
      this.isUserName = false;
    if (!this.isUserName && this.userData.userName != '')
      this.isUserName = true;
    if (this.userData.password == '')
      this.isPassword = false;
    if (!this.isPassword && this.userData.password != '')
      this.isPassword = true;
    else {
      alert('Try Again')
    }
  }
}
}
