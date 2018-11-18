import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  _searchBy: string;
  users: any;
  filteredUsers: any[]=[];
  constructor(private _usersService: UsersService, private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
      this.users = this._activatedRoute.snapshot.data['users'];
      this.filteredUsers = this.users;
  }

  onUserclick(user) {
    this._router.navigate(['/user', user.id]);
  }

  get searchBy() {
    return this._searchBy;
  }

  set searchBy(value) {
    this._searchBy = value;
    if(value) {
      this.filteredUsers = this.users.filter(user => {
        if(user.firstName.toLowerCase().includes(value.toLowerCase()) || user.lastName.toLowerCase().includes(value.toLowerCase()) || (user.orderTotal.amount/100).toFixed(2).toString().includes(value)) {
          return true;
        } else {
          return false;
        }
      })
    } else {
      this.filteredUsers = this.users;
    }
  }
}
