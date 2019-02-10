import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "@app/_models";
import {UserService} from "@app/_services";

@Component({
  selector: 'app-list-user',
  templateUrl: 'list-user.component.html',
  styleUrls: ['list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll()
      .subscribe( data => {
          this.users = data;
      });
  }

  deleteUser(user: User): void {
    this.userService.delete(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(user: User): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
}
