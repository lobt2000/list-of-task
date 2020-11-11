import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  isTrue = false
  newName = '';
  newPass = '';
  newEmail = '';
  users: Array<any> = []
  editIndex: number;
  isCheck = true;
  widthEmail = '0px';
  widthLogin = '0px';
  widthPass = '0px';
  widthNum = '0px';
  widthIndex ;
  widthEdit;
  widthDel;
  constructor() { }

  ngOnInit(): void {
  }
  add(): void {
    if (this.newName.length !== 0 && this.newPass.length !== 0 && this.newEmail.length !== 0) {
      const user1 = {
        name: this.newName,
        pass: this.newPass,
        email: this.newEmail
      };
      this.users.push(user1);
      if (+(this.widthEmail.slice(0, -2)) < (this.newEmail.length * 13)) {
        this.widthEmail = this.newEmail.length * 13 + 'px';
        this.widthPass = this.newPass.length * 12.6 + 'px';
        this.widthLogin = this.newName.length * 11.4 + 'px';
        this.widthEdit = 28 + 'px';
        this.widthDel = 46 + 'px';
        this.widthIndex = 17;

        console.log(this.widthEmail.slice(0, -2));

      }
      else {
        this.widthEmail = this.widthEmail;
        this.widthPass = this.widthPass;
        this.widthLogin = this.widthLogin;
        this.widthEdit = 28 + 'px';
        this.widthDel = 46 + 'px';
        this.widthIndex = '17px';

      }


      this.newName = '';
      this.newPass = '';
      this.newEmail = '';
      this.isTrue = false


    }
    else {
      !this.isTrue
    }

  }
  del(index: number): void {
    this.users.splice(index, 1)
    if(this.users.length == 0){
      this.widthEmail = 0 + 'px';
      this.widthPass = 0 + 'px';
      this.widthLogin = 0 + 'px';
      this.widthEdit = 0 + 'px';
      this.widthDel = 0 + 'px';
      this.widthIndex = '0px';
    }
    else{
      this.widthEmail = this.widthEmail;
        this.widthPass = this.widthPass;
        this.widthLogin = this.widthLogin;
        this.widthEdit = 28 + 'px';
        this.widthDel = 46 + 'px';
        this.widthIndex = '17px';
    }
  }
  edit(index: number): void {
    this.newName = this.users[index].name;
    this.newPass = this.users[index].pass;
    this.newEmail = this.users[index].email;
    this.editIndex = index;
    this.isCheck = false;
    console.log(this.editIndex);

  }

  save(): void {
    this.users[this.editIndex].name = this.newName;
    this.users[this.editIndex].pass = this.newPass;
    this.users[this.editIndex].email = this.newEmail;
    this.newName = '';
    this.newPass = '';
    this.newEmail = '';
    this.isCheck = true;
    console.log(this.editIndex);

  }
}
