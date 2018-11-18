import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  selectedUser: any;
  userForm: FormGroup
  @ViewChild('myModal') myModal: ElementRef;
  constructor(private _usersService: UsersService, private _activatedRoute: ActivatedRoute, private _router:Router, private _formbuilder: FormBuilder) { 
    this.userForm = this._formbuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      currency: ['', [Validators.required]],
      street: ['', [Validators.required]],
      apt:  ['', [Validators.required]],
      city:  ['', [Validators.required]],
      state:  ['', [Validators.required]],
      zip: ['', Validators.required]
    })
  }

  ngOnInit() {
      this.selectedUser = this._activatedRoute.snapshot.data['user'];
      this.userForm.patchValue({
        firstName: this.selectedUser.firstName,
        lastName: this.selectedUser.lastName,
        amount: this.selectedUser.orderTotal.amount,
        currency: this.selectedUser.orderTotal.currency,
        street: this.selectedUser.address.street,
        apt: this.selectedUser.address.apt,
        city: this.selectedUser.address.city,
        state: this.selectedUser.address.state,
        zip: this.selectedUser.address.zip
      })
    
    this.userForm.controls['currency'].disable();
  }

  save() {
    let user = {
      "id": this.selectedUser.id,
      "picture": 'assets/images/profile-picture.png',
      "firstName": this.userForm.controls['firstName'].value,
      "lastName": this.userForm.controls['lastName'].value,
      "address": {
        "apt": this.userForm.controls['apt'].value,
        "street": this.userForm.controls['street'].value,
        "city": this.userForm.controls['city'].value,
        "state": this.userForm.controls['state'].value,
        "zip": this.userForm.controls['zip'].value
      },
      "orderTotal": {
        "amount": parseFloat(this.userForm.controls['amount'].value),
        "currency": "USD"
      }
    }
    this._usersService.updateUser(this.selectedUser.id, user).subscribe(data => {
      this._router.navigate(['/users']);
    });
  }

  delete() {
    this._usersService.deleteUser(this.selectedUser.id).subscribe((data) => {
      this.closeModal();
      this.cancel();
    })
  }

  cancel() {
    this._router.navigate(['/users']);
  }

  openModal() {
    this.myModal.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.myModal.nativeElement.style.display = 'none';
  }

}
