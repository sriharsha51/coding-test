import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { UsersService } from './users.service';
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class UsersResolverService implements Resolve<any> {

    constructor(private _usersService: UsersService) {  }

    resolve(route: ActivatedRouteSnapshot) {
       return this._usersService.getUsers();
    }
}